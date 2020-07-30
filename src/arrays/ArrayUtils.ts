export interface IArrayUtils {
  chunk: <T>(values: T[], chunkSize: number) => T[][]
  orderBy: <T, K extends keyof T>(values: T[], orderType: K) => void
  shuffle<T>(a: T[]): void
}

export class ArrayUtils implements IArrayUtils {
  private getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
  }

  orderBy<T, K extends keyof T>(values: T[], orderType: K) {
    if ((values || []).length > 1) {
      ;(values || []).sort((a, b) => {
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
    // NOTE; funciton will return an empty array if values parameter is undefined
    const result: T[][] = []
    if ((values || []).length > chunkSize) {
      // if values.length > chunkSize, proceed to chunk it
      for (let i = 0, len = values.length; i < len; i += chunkSize) {
        result.push(<T[]>values.slice(i, i + chunkSize))
      }
      return result
    } else if ((values || []).length > 0) {
      // if values.length is less than chunkSize but greater than 0, add it to result
      result.push(values)
      return result
    }
    return result
  }

  shuffle<T>(a: T[]): void {
    for (let i: number = a.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1))
      const tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }
  }
}

export const arrayUtils: ArrayUtils = new ArrayUtils()
