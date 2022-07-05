import { ICoefficients } from "../../linearEquations/interfaces";
import { IOptions } from "./getChartConfig";
import { IDataPoints } from "../../interfaces/chart";
import { getFilteredOptions } from "./getFilteredOptions";

interface IGenerateDataPointsProps {
  coefficients: ICoefficients;
  options: IOptions;
}

export const generateDataPoints = ({
  coefficients,
  options,
}: IGenerateDataPointsProps): IDataPoints => {
  const { a, b, c } = coefficients;
  let { dataPoints, start, end } = getFilteredOptions(options);
  if (dataPoints === 0 || start === end) {
    return { xs: [], ys: [] };
  }

  const incrementBy = (end - start) / dataPoints;
  const xs = [];
  const ys = [];
  let h = start;
  while (h <= end) {
    if (b === 0) {
      xs.push(-c / a);
      ys.push(h);
    } else if (a === 0) {
      xs.push(h);
      ys.push(-c / b);
    } else {
      xs.push(h);
      ys.push(-(a * h + c) / b);
    }
    h += incrementBy;
  }

  return { xs, ys };
};
