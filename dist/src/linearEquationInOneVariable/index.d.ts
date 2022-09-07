interface IOptions {
    variableName: string;
}
interface IMessage {
    type: string;
    message: string;
}
export declare const solveEquationInOneVariable: (equation: string, options?: IOptions) => number | IMessage;
export {};
