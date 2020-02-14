"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayUtils {
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
        // NOTE; funciton will return an empty array if values parameter is undefined
        const result = [];
        if ((values || []).length > chunkSize) {
            // if values.length > chunkSize, proceed to chunk it
            for (let i = 0, len = values.length; i < len; i += chunkSize) {
                result.push(values.slice(i, i + chunkSize));
            }
            return result;
        }
        else if ((values || []).length > 0) {
            // if values.length is less than chunkSize but greater than 0, add it to result
            result.push(values);
            return result;
        }
        return result;
    }
}
exports.ArrayUtils = ArrayUtils;
