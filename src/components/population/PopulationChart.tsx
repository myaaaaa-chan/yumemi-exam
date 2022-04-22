import { useContext } from 'react';
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { PopulationContext } from '../../contexts/PopulationContext';
import { ResasLogic } from '../../libs/logic/ResasLogic';
import { ChartData } from '../../model/Chart';
import { ChartContainer } from './styles';

/**
 * 人口推移グラフビュー
 *
 * @constructor
 */
export const PopulationChart = () => {
  const { state } = useContext(PopulationContext);

  const lines: JSX.Element[] = [];
  let chartDataList: ChartData[] = [];
  if (state.populationCompositions.size > 0) {
    const logic = new ResasLogic();
    chartDataList = logic.buildChartData(state.populationCompositions);
    state.populationCompositions.forEach((cpByPref, prefCode) => {
      lines.push(
        <Line
          key={`population${prefCode}`}
          name={cpByPref.prefName}
          dataKey={`population${prefCode}`}
          type="monotone"
          stroke={logic.generateLineColor()}
        />
      );
    });
  }

  if (state.populationCompositions.size > 0) {
    console.log('Render chart');
    return (
      <ChartContainer>
        <ResponsiveContainer width="80%" height={400}>
          <LineChart data={chartDataList}>
            {lines}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year">
              <Label value="年度" position="insideBottomRight" />
            </XAxis>
            <YAxis width={80}>
              <Label value="人口数" position="insideTop" />
            </YAxis>
            <Legend layout={'vertical'} verticalAlign={'middle'} align={'right'}  />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  } else {
    return <></>;
  }
};
