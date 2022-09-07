import { getChartConfig as getChartConfigFromEquation } from "../utils/charts/getChartConfig";
import {
  getSolution as getSolutionFromCoefficient,
  getEquationCoefficient,
  getSolutionOfPair,
  getInEquationFormat,
} from "../utils/equations";
import { ISolution, IPairSolution, UNIQUE_SOLUTION } from "./interfaces";
import { IEquation, TwoVariable } from "../interfaces/equation";

export class SystemOfEquation {
  equations: IEquation[];
  validEquations: IEquation[];
  invalidEquations: IEquation[];
  constructor(equations: Array<string>) {
    const {
      equations: allEquations,
      validEquations,
      invalidEquations,
    } = getInEquationFormat(equations, TwoVariable);
    this.equations = allEquations;
    this.validEquations = validEquations;
    this.invalidEquations = invalidEquations;
  }

  getAllEquations() {
    return this.equations;
  }
  getValidEquations() {
    return this.validEquations;
  }
  getInvalidEquations() {
    return this.invalidEquations;
  }

  getSolutionOfEveryPossiblePairOfEquations() {
    const solutions: IPairSolution[] = [];
    if (this.validEquations.length === 1) {
      return {
        problem: "Only one equation, no intersection",
        solution: "Provide Atleast two intersecting equations",
      };
    }
    for (let i = 0; i < this.validEquations.length - 1; i++) {
      for (let j = i + 1; j < this.validEquations.length; j++) {
        let equation1 = this.validEquations[i];
        let equation2 = this.validEquations[j];
        const solution = getSolutionOfPair(equation1, equation2);
        solutions.push({
          firstEquationId: equation1.id,
          secondEquationId: equation2.id,
          solution: solution,
        });
      }
    }
    return solutions;
  }

  getIntersectionOfEquations() {
    const solutions: IPairSolution[] = [];

    if (this.validEquations.length === 1) {
      return {
        problem: "Only one equation, no intersection",
        solution: "Provide Atleast two intersecting equations",
      };
    }

    for (let i = 0; i < this.validEquations.length; i++) {
      for (let j = i; j < this.validEquations.length; j++) {
        let equation1 = this.validEquations[i];
        let equation2 = this.validEquations[j];
        const solution = getSolutionOfPair(equation1, equation2);
        if (solution.type === UNIQUE_SOLUTION) {
          solutions.push({
            firstEquationId: equation1.id,
            secondEquationId: equation2.id,
            solution: solution,
          });
        }
      }
    }

    return solutions;
  }

  getSolutionOfEquation(): ISolution {
    const equations = this.validEquations;
    const firstEquation = equations[0];
    const secondEquation = equations[1];
    return getSolutionOfPair(firstEquation, secondEquation);
  }

  getChartConfig() {
    return getChartConfigFromEquation({ validEquations: this.validEquations });
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
