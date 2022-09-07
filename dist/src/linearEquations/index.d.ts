import { ISolution } from "./interfaces";
declare type IEquation = string;
export declare class SystemOfEquation {
  equations: IEquation[];
  constructor(equations: IEquation[]);
  getSolutionOfEquation(): ISolution;
  getChartConfig(): import("../interfaces/chart").IChartConfig;
  getEquationByIndex(index: number): string;
}
export declare function getSolutionOfEquation(equations: string[]): ISolution;
export {};
