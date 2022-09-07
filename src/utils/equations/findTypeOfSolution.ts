import {
  IEquationSystemFactor,
  ISolutionType,
  INFINITE_SOLUTION,
  NO_SOLUTION,
  UNIQUE_SOLUTION,
  ICoefficients,
} from "../../linearEquations/interfaces";

export const findTypeOfSolution = (
  factor: IEquationSystemFactor,
  coefficient1: ICoefficients,
  coefficient2: ICoefficients
): ISolutionType => {
  const { xFactor, yFactor, constFactor } = factor;

  if (xFactor - yFactor === 0 && xFactor - constFactor === 0) {
    return INFINITE_SOLUTION;
  }

  if (constFactor === 0 && xFactor !== 0) {
    return NO_SOLUTION;
  }

  if (coefficient1.a === 0 && coefficient2.a === 0) {
    return NO_SOLUTION;
  }

  if (coefficient1.b === 0 && coefficient2.b === 0) {
    return NO_SOLUTION;
  }

  return UNIQUE_SOLUTION;
};
