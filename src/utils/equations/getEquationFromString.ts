import math from "../../math";

export const getEquationFromString = (
  equationString: string
): math.MathNode => {
  const equation = math.parse(equationString);
  return equation;
};

export const getEquationOnOneSide = (equationString: string): string => {
  let equation = equationString.split("=");
  return math.simplify(`${equation[0]}-(${equation[1]})`).toString();
};
