import { PopulationContext } from '../contexts/PopulationContext';
import { usePopulationReducer } from '../reducers/PopulationReducer';
import { PopulationChart } from './population/PopulationChart';
import { PrefectureList } from './prefectures/PrefectureList';
import { AppContainer, Title } from './styles';

export const App = () => {
  const [populationState, populationDispatch] = usePopulationReducer();

  return (
    <AppContainer>
      <Title>人口推移</Title>
      <PopulationContext.Provider value={{ state: populationState, dispatch: populationDispatch }}>
        <PrefectureList />
        <PopulationChart />
      </PopulationContext.Provider>
    </AppContainer>
  );
};
export default App;
