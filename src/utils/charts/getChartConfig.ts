import _ from "lodash";
import { IChartConfig } from "../../interfaces/chart";
import { IEquation } from "../../interfaces/equation";
import { getEquationCoefficient } from "../equations";
import { isEquationValid } from "../equations/isEquationValid";
import { generateDataPoints } from "./generateDataPoints";
import { generateDataForConfig } from "./generateDataForConfig";

export interface IOptions {
  dataPoints: number;
  start: number;
  end: number;
}

const defaultOptions = {
  dataPoints: 10,
  start: -10,
  end: 10,
};

interface IGetChartConfigProps {
  equations: IEquation[];
  options?: IOptions;
}

export const getChartConfig = ({
  equations,
  options = defaultOptions,
}: IGetChartConfigProps): IChartConfig => {
  const validEquations = _.dropWhile(equations, (equation) => {
    return !isEquationValid(equation);
  });

  const dataPoints = validEquations.map((equation) => {
    const coefficients = getEquationCoefficient(equation);
    const { xs, ys } = generateDataPoints({ coefficients, options });
    return { xs, ys };
  });

  return {
    type: "line",
    data: generateDataForConfig({ dataPoints, validEquations }),
    options: {},
  };
};
