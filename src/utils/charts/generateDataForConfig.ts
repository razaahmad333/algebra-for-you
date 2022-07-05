import { IEquation } from "../../interfaces/equation";
import { IDataPoints, IChartData } from "../../interfaces/chart";

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

  const datasets = dataPoints.map(({ xs, ys }, idx) => ({
    label: validEquations[idx],
    type: true ? "scatter" : "line",
    backgroundColor: `rgb(255, 255,${idx}${idx * 5})`,
    borderColor: "rgb(255, 99, 132)",
    // yAxisID: xs[0] === xs[1] ? "first x axis" : "first y axis",
    // xAxisID: xs[0] === xs[1] ? "first y axis" : "first x axis",
    showLine: true,
    data: xs.map((xe, i) => ({ y: ys[i], x: xe })),
  }));
  //   return {
  //     labels: [...labels, 3],
  //     datasets: [
  //       ...datasets,
  //       {
  //         label: "solution",
  //         type: "line",
  //         backgroundColor: "rgb(25, 25,25)",
  //         yAxisID: "first x axis",
  //         xAxisID: "first y axis",
  //         // borderColor: "rgb(0, 0, 0)",
  //         data: [...Array(labels.length).fill(0), 12],
  //         // barThickness: 1,
  //       },
  //     ],
  //   };

  return {
    labels,
    datasets,
  };
};
