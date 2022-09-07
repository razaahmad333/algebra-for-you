export interface IChartData {
  labels: Array<string | number>;
  datasets: Array<any>;
}

export type IChart = "line" | "scatter";
export type IChartOptions = any;

export interface IChartConfig {
  type: IChart;
  data: IChartData;
  options: IChartOptions;
}

export interface IDataPoints {
  xs: Array<number>;
  ys: Array<number>;
}
