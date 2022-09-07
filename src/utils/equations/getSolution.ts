import {
  ICoefficients,
  ISolution,
  UNIQUE_SOLUTION,
} from "../../linearEquations/interfaces";
import { findTypeOfSolution } from "./findTypeOfSolution";

export const getSolution = (
  coefficients1: ICoefficients,
  coefficients2: ICoefficients
): ISolution => {
  const { a: a1, b: b1, c: c1 } = coefficients1;

  const { a: a2, b: b2, c: c2 } = coefficients2;

  let xFactor = b1 * c2 - b2 * c1;
  let yFactor = a2 * c1 - a1 * c2;
  let constFactor = a1 * b2 - a2 * b1;

  const typeOfSolution = findTypeOfSolution({ xFactor, yFactor, constFactor });

  if (typeOfSolution === UNIQUE_SOLUTION) {
    const x = xFactor / constFactor;
    const y = yFactor / constFactor;
    return { x, y, type: typeOfSolution };
  }

  return { x: null, y: null, type: typeOfSolution };
};
