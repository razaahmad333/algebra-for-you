export interface IEquation {
  id: string;
  expression: string;
  valid: boolean;
}

export const OneVariable = "One Variable";
export const TwoVariable = "Two Variable";
export const ThreeVariable = "Three Variable";
export const FourVariable = "Four Variable";

export type IEquationType =
  | typeof OneVariable
  | typeof TwoVariable
  | typeof ThreeVariable
  | typeof FourVariable;
