import { IChartConfig } from "../../interfaces/chart";
import { IEquation } from "../../interfaces/equation";
export interface IOptions {
  dataPoints: number;
  start: number;
  end: number;
}
interface IGetChartConfigProps {
  equations: IEquation[];
  options?: IOptions;
}
export declare const getChartConfig: ({
  equations,
  options,
}: IGetChartConfigProps) => IChartConfig;
export {};
