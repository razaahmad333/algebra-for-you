import { getChartConfig as getChartConfigFromEquation } from "../utils/charts/getChartConfig";
import {
  getSolution as getSolutionFromCoefficient,
  getEquationCoefficient,
} from "../utils/equations";
import { ISolution } from "./interfaces";
type IEquation = string;

export class SystemOfEquation {
  equations: IEquation[];
  constructor(equations: IEquation[]) {
    this.equations = equations;
  }

  getSolutionOfEquation(): ISolution {
    const equations = this.equations;
    const firstEquation = equations[0];
    const secondEquation = equations[1];
    const coefficients1 = getEquationCoefficient(firstEquation);
    const coefficients2 = getEquationCoefficient(secondEquation);
    return getSolutionFromCoefficient(coefficients1, coefficients2);
  }

  getChartConfig() {
    return getChartConfigFromEquation({ equations: this.equations });
  }

  getEquationByIndex(index: number) {
    return this.equations[index];
  }
}

export function getSolutionOfEquation(equations: string[]): ISolution {
  const firstEquation = equations[0];
  const secondEquation = equations[1];
  const coefficients1 = getEquationCoefficient(firstEquation);
  const coefficients2 = getEquationCoefficient(secondEquation);
  return getSolutionFromCoefficient(coefficients1, coefficients2);
}
