import { getEquationOnOneSide } from "../utils/equations/getEquationFromString";
import math from "../math";
import { isEquationValidForOneVariable } from "../utils/equations/isEquationValid";

interface IOptions {
  variableName: string;
}

const defaultOptions = {
  variableName: "x",
};

interface IMessage {
  type: string;
  message: string;
}

export const solveEquationInOneVariable = (
  equation: string,
  options: IOptions = defaultOptions
): number | IMessage => {
  const { variableName } = options;
  if (!isEquationValidForOneVariable(equation, variableName)) {
    return {
      type: "error",
      message: "Invalid equation",
    };
  }

  const equationSimplifiedOnOneSide: string = getEquationOnOneSide(equation);

  const coefficientOfVariable = Number(
    math.derivative(equationSimplifiedOnOneSide, variableName).toString()
  );

  const remainingConstant = math.evaluate(equationSimplifiedOnOneSide, {
    [variableName]: 0,
  });

  return -remainingConstant / coefficientOfVariable;
};
