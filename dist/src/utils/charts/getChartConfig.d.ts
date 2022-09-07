import { IChartConfig } from "../../interfaces/chart";
import { IEquation } from "../../interfaces/equation";
export interface IOptions {
    dataPoints: number;
    start: number;
    end: number;
}
interface IGetChartConfigProps {
    validEquations: IEquation[];
    options?: IOptions;
}
export declare const getChartConfig: ({ validEquations, options, }: IGetChartConfigProps) => IChartConfig;
export {};
