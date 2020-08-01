export interface IArrayUtilsStatic {
    chunk: <T>(values: T[], chunkSize: number) => T[][];
    orderBy: <T, K extends keyof T>(values: T[], orderType: K) => void;
    shuffle<T>(a: T[]): void;
}
export interface IArrayUtils {
}
export declare const ArrayUtils: IArrayUtilsStatic;
