import { IOptions } from "./getChartConfig";

export const getFilteredOptions = (options: IOptions): IOptions => {
  const { dataPoints, start, end } = options;
  if (dataPoints < 0) {
    options.dataPoints = 0;
  }
  if (start > end) {
    options.start = end;
    options.end = start;
  }
  return options;
};
