import { IEquation } from "../../interfaces/equation";
import { IDataPoints, IChartData } from "../../interfaces/chart";

import colorsPalattes from "./colors";
import _ from "lodash";

interface IGenerateDataForConfigProps {
  dataPoints: IDataPoints[];
  validEquations: IEquation[];
}

export const generateDataForConfig = ({
  dataPoints,
  validEquations,
}: IGenerateDataForConfigProps): IChartData => {
  if (dataPoints.length === 0) return { labels: [], datasets: [] };
  const labels = dataPoints[0].xs;

  const colors = _.shuffle(colorsPalattes);

  const datasets = dataPoints.map(({ xs, ys }, idx) => ({
    label: validEquations[idx].expression,
    type: true ? "scatter" : "line",
    backgroundColor: colors[idx],
    borderColor: colors[idx],
    showLine: true,
    data: xs.map((xe, i) => ({ y: ys[i], x: xe })),
  }));
  return {
    labels,
    datasets,
  };
};
