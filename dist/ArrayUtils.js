export class ArrayUtils {
    getProperty(obj, key) {
        return obj[key];
    }
    orderBy(values, orderType) {
        if ((values || []).length > 1) {
            (values || []).sort((a, b) => {
                const valueA = this.getProperty(a, orderType);
                const valueB = this.getProperty(b, orderType);
                if (valueA < valueB) {
                    return -1;
                }
                else if (valueA > valueB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    }
    chunk(values, chunkSize) {
        const result = [];
        if ((values || []).length > 0) {
            for (let i = 0, len = values.length; i < len; i += chunkSize) {
                result.push(values.slice(i, i + chunkSize));
            }
        }
        return result;
    }
}
export const arrayUtils = new ArrayUtils();
