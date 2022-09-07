import { ISolution, IPairSolution } from "./interfaces";
import { IEquation } from "../interfaces/equation";
export declare class SystemOfEquation {
    equations: IEquation[];
    validEquations: IEquation[];
    invalidEquations: IEquation[];
    constructor(equations: Array<string>);
    getAllEquations(): IEquation[];
    getValidEquations(): IEquation[];
    getInvalidEquations(): IEquation[];
    getSolutionOfEveryPossiblePairOfEquations(): IPairSolution[] | {
        problem: string;
        solution: string;
    };
    getIntersectionOfEquations(): IPairSolution[] | {
        problem: string;
        solution: string;
    };
    getSolutionOfEquation(): ISolution;
    getChartConfig(): import("../interfaces/chart").IChartConfig;
    getEquationByIndex(index: number): IEquation;
}
export declare function getSolutionOfEquation(equations: string[]): ISolution;
