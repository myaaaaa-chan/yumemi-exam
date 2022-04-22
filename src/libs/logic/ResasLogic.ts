import aspida from '@aspida/axios';

import { ChartData } from '../../model/Chart';
import { PopulationComposition } from '../../model/PopulationComposition';
import api from './aspida/$api';

/**
 * RESASのAPIをコールするロジッククラス
 */
export class ResasLogic {
  private readonly $apiKey = process.env.REACT_APP_RESAS_API_KEY ? process.env.REACT_APP_RESAS_API_KEY : '';

  /**
   * 都道府県一覧取得APIをコールする
   */
  public getPrefectures = async () => {
    const client = api(aspida());
    const apiResponse = await client.api.v1.prefectures.$get({
      headers: {
        'X-API-KEY': this.$apiKey
      }
    });

    return apiResponse;
  };

  /**
   * 人口構成取得APIをコールする
   *
   * @param prefectureCode 都道府県コード
   */
  public getPopulationComposition = async (prefectureCode: number) => {
    const client = api(aspida());
    const apiResponse = await client.api.v1.population.composition.perYear.$get({
      query: {
        prefCode: prefectureCode,
        cityCode: '-'
      },
      headers: {
        'X-API-KEY': this.$apiKey
      }
    });

    return apiResponse;
  };

  public buildChartData = (populationCompositions: Map<number, PopulationComposition>) => {
    const chartDataList: ChartData[] = [];
    populationCompositions.forEach((cpByPref, prefCode, map) => {
      cpByPref.data.map((cp, key, map) => {
        if (cp.label === '総人口') {
          cp.data.map((data, key, map) => {
            let populationData = chartDataList[data.year];
            if (!populationData) {
              populationData = {
                year: data.year,
                [`population${prefCode}`]: data.value
              };
            } else {
              populationData[`population${prefCode}`] = data.value;
            }
            chartDataList[data.year] = populationData;
          });
        }
      });
    });

    return chartDataList.filter(Boolean);
  };
}
