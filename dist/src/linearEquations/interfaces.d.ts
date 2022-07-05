export declare const INFINITE_SOLUTION = "Infinite solutions, ( Consistent and Dependent)";
export declare const UNIQUE_SOLUTION = "Unique solution ( Consistent and Independent) ";
export declare const NO_SOLUTION = "No solution ( Inconsistent and Independent )";
export declare type IINFINITE_SOLUTION = typeof INFINITE_SOLUTION;
export declare type IUNIQUE_SOLUTION = typeof UNIQUE_SOLUTION;
export declare type INO_SOLUTION = typeof NO_SOLUTION;
export declare type ISolutionType = IINFINITE_SOLUTION | IUNIQUE_SOLUTION | INO_SOLUTION;
export interface ICoefficients {
    a: number;
    b: number;
    c: number;
}
export interface ISolution {
    x: number | null;
    y: number | null;
    type: ISolutionType;
}
export interface IEquationSystemFactor {
    xFactor: number;
    yFactor: number;
    constFactor: number;
}
