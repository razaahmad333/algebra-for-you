import { IEquation } from "../../interfaces/equation";
import { IDataPoints, IChartData } from "../../interfaces/chart";
interface IGenerateDataForConfigProps {
    dataPoints: IDataPoints[];
    validEquations: IEquation[];
}
export declare const generateDataForConfig: ({ dataPoints, validEquations, }: IGenerateDataForConfigProps) => IChartData;
export {};
