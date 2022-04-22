import { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';

import { PopulationContext } from '../../contexts/PopulationContext';
import { ResasLogic } from '../../libs/logic/ResasLogic';
import { Prefecture } from '../../model/Prefecture';

/**
 * 都道府県一覧表示コンポーネント
 *
 * @constructor
 */
export const Prefectures = () => {
  const { state: populationState, dispatch: populationDispatch } = useContext(PopulationContext);
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    (async () => {
      const logic = new ResasLogic();
      // 都道府県一覧を取得
      const response = await logic.getPrefectures();
      if (!response.message) {
        return setPrefectures(response.result);
      }
    })();
  }, []);

  const onPrefectureClick = async (prefecture: Prefecture) => {
    if (populationState.populationCompositions.has(prefecture.prefCode)) {
      populationDispatch({ type: 'delete_population_composition', prefCode: prefecture.prefCode });
    } else {
      populationDispatch({ type: 'get_population_composition' });
      const logic = new ResasLogic();
      const response = await logic.getPopulationComposition(prefecture.prefCode);
      if (response.message) {
        populationDispatch({ type: 'get_population_composition_failure', 'error': response.message });
      } else {
        populationDispatch({
          type: 'get_population_composition_success',
          prefCode: prefecture.prefCode,
          populationComposition: response.result
        });
      }
    }
  };

  const prefectureList = useMemo(() => {
    const list = prefectures.map((prefecture) => {
      return (
        <label key={`prefecture_${prefecture.prefCode}`}>
          <input
            type={'checkbox'}
            id={`prefecture_${prefecture.prefCode}`}
            name={`prefecture_${prefecture.prefCode}`}
            value={prefecture.prefCode}
            onChange={(e) => onPrefectureClick(prefecture)}
            checked={populationState.populationCompositions.has(prefecture.prefCode)}
          />
          {prefecture.prefName}
        </label>
      );
    });

    return list;
  }, [prefectures, populationState]);

  return (
    <div>
      <ul>
        {prefectureList}
      </ul>
    </div>
  );
};
