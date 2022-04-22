import './App.css';

import { PopulationContext } from '../contexts/PopulationContext';
import { usePopulationReducer } from '../reducers/PopulationReducer';
import { PopulationChart } from './population/PopulationChart';
import { Prefectures } from './prefectures';

export const App = () => {
  const [populationState, populationDispatch] = usePopulationReducer();

  return (
    <>
      <PopulationContext.Provider value={{ state: populationState, dispatch: populationDispatch }}>
        <Prefectures />
        <PopulationChart />
      </PopulationContext.Provider>
    </>
  );
};
export default App;
