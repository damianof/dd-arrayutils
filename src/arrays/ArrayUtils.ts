export interface IArrayUtils {
	chunk: <T>(values: T[], chunkSize: number) => T[][]
	orderBy: <T, K extends keyof T>(values: T[], orderType: K) => void
}

export class ArrayUtils implements IArrayUtils {

	private getProperty<T, K extends keyof T>(obj: T, key: K) {
		return obj[key]
	}

	orderBy<T, K extends keyof T>(values: T[], orderType: K) {
		if ((values || []).length > 1) {
			(values || []).sort((a, b) => {
				const valueA = this.getProperty<T, K>(a, orderType)
				const valueB = this.getProperty<T, K>(b, orderType)
				if (valueA < valueB) {
					return -1
				} else if (valueA > valueB) {
					return 1
				} else {
					return 0
				}
			})
		}
	}

	chunk<T>(values: T[], chunkSize: number): T[][] {
		const result: T[][] = []
		if ((values || []).length > 0) {
			for (let i = 0, len = values.length; i<len; i += chunkSize) {
				result.push(values.slice(i, i + chunkSize))
			}
		}
		return result
	}

}

export const arrayUtils = new ArrayUtils()
