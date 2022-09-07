import { IEquation, IEquationType } from "../../interfaces/equation";
interface IReturnGetValidEquations {
    equations: IEquation[];
    validEquations: IEquation[];
    invalidEquations: IEquation[];
}
export declare const getInEquationFormat: (equations: Array<string>, equationType: IEquationType) => IReturnGetValidEquations;
export declare const getValidityOfEquation: (equation: string, equationType: IEquationType) => boolean;
export {};
