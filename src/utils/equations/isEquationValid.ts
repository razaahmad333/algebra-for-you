import { IEquation } from "interfaces/equation";
import { getEquationOnOneSide } from "./getEquationFromString";

export const isEquationValid = (equation: any): boolean => {
  if (equation === undefined) {
    return false;
  }

  if (typeof equation !== "string") {
    return false;
  }

  if (!equation.includes("=")) {
    return false;
  }

  const ifConstant =
    Number(getEquationOnOneSide(equation)) === 0 ||
    Number(getEquationOnOneSide(equation));

  if (ifConstant) {
    return false;
  }

  return true;
};

export const isEquationValidForTwoVariable = (
  equation: any,
  variableNames: string[] = ["x", "y"]
): boolean => {
  if (!isEquationValid(equation)) {
    return false;
  }
  const [x1, x2] = variableNames;

  if (!variableNames.includes(x1) || !variableNames.includes(x2)) {
    return false;
  }

  return true;
};

export const isEquationValidForOneVariable = (
  equation: any,
  variableName: string = "x"
): boolean => {
  if (!isEquationValid(equation)) {
    return false;
  }

  if (!equation.includes(variableName)) {
    return false;
  }

  return true;
};
