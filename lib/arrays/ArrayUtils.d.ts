export interface IArrayUtils {
  chunk: <T>(values: T[], chunkSize: number) => T[][];
  orderBy: <T, K extends keyof T>(values: T[], orderType: K) => void;
}
export declare class ArrayUtils implements IArrayUtils {
  private getProperty;
  orderBy<T, K extends keyof T>(values: T[], orderType: K): void;
  chunk<T>(values: T[], chunkSize: number): T[][];
}
export declare const arrayUtils: ArrayUtils;
