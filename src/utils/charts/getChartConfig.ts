import _ from "lodash";
import { IChartConfig } from "../../interfaces/chart";
import { IEquation } from "../../interfaces/equation";
import { getEquationCoefficient } from "../equations";
import { isEquationValidForTwoVariable } from "../equations/isEquationValid";
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
  validEquations: IEquation[];
  options?: IOptions;
}

export const getChartConfig = ({
  validEquations,
  options = defaultOptions,
}: IGetChartConfigProps): IChartConfig => {
  const dataPoints = validEquations.map((equation) => {
    const coefficients = getEquationCoefficient(equation.expression);
    const { xs, ys } = generateDataPoints({ coefficients, options });
    return { xs, ys };
  });

  return {
    type: "scatter",
    data: generateDataForConfig({ dataPoints, validEquations }),
    options: {
      scales: {
        x: {
          // type: "linear",
          position: "bottom",
        },
      },
    },
  };
};
