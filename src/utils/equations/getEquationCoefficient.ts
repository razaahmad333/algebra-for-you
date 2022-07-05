import { getEquationOnOneSide } from "./getEquationFromString";
import math from "../../math";
import { ICoefficients } from "../../linearEquations/interfaces";

export const getEquationCoefficient = (
  equationString: string
): ICoefficients => {
  let equation = getEquationOnOneSide(equationString);
  let a = math.derivative(equation, "x").toString();
  let b = math.derivative(equation, "y").toString();
  let c = math.evaluate(equation, { x: 0, y: 0 });
  return { a: Number(a), b: Number(b), c: Number(c) };
};
