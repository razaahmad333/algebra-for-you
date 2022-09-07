import {
  IEquation,
  IEquationType,
  OneVariable,
  TwoVariable,
} from "../../interfaces/equation";
import {
  isEquationValid,
  isEquationValidForOneVariable,
  isEquationValidForTwoVariable,
} from "./isEquationValid";
import { getRandomId } from "../common/getRandomId";

interface IReturnGetValidEquations {
  equations: IEquation[];
  validEquations: IEquation[];
  invalidEquations: IEquation[];
}

export const getInEquationFormat = (
  equations: Array<string>,
  equationType: IEquationType
): IReturnGetValidEquations => {
  const allEquations: IEquation[] = equations.map((equation) => ({
    id: getRandomId(),
    expression: equation,
    valid: getValidityOfEquation(equation, equationType),
  }));

  return {
    equations: allEquations,
    validEquations: allEquations.filter((equation) => equation.valid),
    invalidEquations: allEquations.filter((equation) => !equation.valid),
  };
};

export const getValidityOfEquation = (
  equation: string,
  equationType: IEquationType
): boolean => {
  switch (equationType) {
    case OneVariable:
      return isEquationValidForOneVariable(equation);
    case TwoVariable:
      return isEquationValidForTwoVariable(equation);
    default:
      return isEquationValid(equation);
  }
};
