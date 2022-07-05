import { ICoefficients } from "../../linearEquations/interfaces";
import { IOptions } from "./getChartConfig";
import { IDataPoints } from "../../interfaces/chart";
interface IGenerateDataPointsProps {
    coefficients: ICoefficients;
    options: IOptions;
}
export declare const generateDataPoints: ({ coefficients, options, }: IGenerateDataPointsProps) => IDataPoints;
export {};
