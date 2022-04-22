import { useContext } from 'react';
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from 'recharts';

import { PopulationContext } from '../../contexts/PopulationContext';
import { ResasLogic } from '../../libs/logic/ResasLogic';
import { ChartData } from '../../model/Chart';

/**
 * 人口推移グラフビュー
 *
 * @constructor
 */
export const PopulationChart = () => {
  const { state } = useContext(PopulationContext);

  const lines: JSX.Element[] = [];
  let chartDataList: ChartData[] = [];
  if (state.populationCompositions) {
    const logic = new ResasLogic();
    chartDataList = logic.buildChartData(state.populationCompositions);
    state.populationCompositions.forEach((cpByPref, prefCode) => {
      lines.push(<Line key={`population${prefCode}`} dataKey={`population${prefCode}`} type="monotone" />);
    });
  }

  return (
    <div>
      <LineChart width={600} height={300} data={chartDataList} margin={{ top: 20, right: 50, bottom: 50, left: 50 }}>
        {lines}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="year">
          <Label value="年度" offset={0} position="right" />
        </XAxis>
        <YAxis>
          <Label value="人口数" position="top"  />
        </YAxis>
      </LineChart>
    </div>
  );
};
