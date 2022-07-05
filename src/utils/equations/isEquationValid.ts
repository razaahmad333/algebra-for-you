import { IEquation } from "interfaces/equation";

export const isEquationValid = (equation: IEquation): boolean => {
  if (equation === undefined) {
    return false;
  }

  if (typeof equation !== "string") {
    return false;
  }

  if (!equation.includes("=")) {
    return false;
  }

  equation = equation.toLocaleLowerCase();

  if (!equation.includes("x") && !equation.includes("y")) {
    return false;
  }
  return true;
};
