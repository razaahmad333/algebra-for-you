import { IEquation } from "../../interfaces/equation";
import { ISolution } from "../../linearEquations/interfaces";
import { getEquationCoefficient } from "./getEquationCoefficient";
import { getSolution as getSolutionFromCoefficient } from "./getSolution";

export const getSolutionOfPair = (
  equation1: IEquation,
  equation2: IEquation
): ISolution => {
  const coefficients1 = getEquationCoefficient(equation1.expression);
  const coefficients2 = getEquationCoefficient(equation2.expression);
  return getSolutionFromCoefficient(coefficients1, coefficients2);
};
