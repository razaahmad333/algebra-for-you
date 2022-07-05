import {
  IEquationSystemFactor,
  ISolutionType,
  INFINITE_SOLUTION,
  NO_SOLUTION,
  UNIQUE_SOLUTION,
} from "../../linearEquations/interfaces";

export const findTypeOfSolution = (
  factor: IEquationSystemFactor
): ISolutionType => {
  const { xFactor, yFactor, constFactor } = factor;

  if (xFactor - yFactor === 0 && xFactor - constFactor === 0) {
    return INFINITE_SOLUTION;
  }

  if (constFactor === 0 && xFactor !== 0) {
    return NO_SOLUTION;
  }

  return UNIQUE_SOLUTION;
};
