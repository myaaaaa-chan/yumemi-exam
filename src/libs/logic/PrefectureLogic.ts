import aspida from '@aspida/axios';

import api from './aspida/$api';

export class PrefectureLogic {
  private readonly $apiKey = process.env.REACT_APP_RESAS_API_KEY ? process.env.REACT_APP_RESAS_API_KEY: '';

  public getPrefectures = async () => {
    const client = api(aspida());
    const apiResponse = await client.api.v1.prefectures.$get({
      headers: {
        'X-API-KEY': this.$apiKey
      }
    });
    console.log(apiResponse);
  };
}
