export interface IEquation {
    id: string;
    expression: string;
    valid: boolean;
}
export declare const OneVariable = "One Variable";
export declare const TwoVariable = "Two Variable";
export declare const ThreeVariable = "Three Variable";
export declare const FourVariable = "Four Variable";
export declare type IEquationType = typeof OneVariable | typeof TwoVariable | typeof ThreeVariable | typeof FourVariable;
