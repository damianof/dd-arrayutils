var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.prototype.getProperty = function (obj, key) {
        return obj[key];
    };
    ArrayUtils.prototype.orderBy = function (values, orderType) {
        var _this = this;
        if ((values || []).length > 1) {
            (values || []).sort(function (a, b) {
                var valueA = _this.getProperty(a, orderType);
                var valueB = _this.getProperty(b, orderType);
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
    };
    ArrayUtils.prototype.chunk = function (values, chunkSize) {
        var result = [];
        if ((values || []).length > 0) {
            for (var i = 0, len = values.length; i < len; i += chunkSize) {
                result.push(values.slice(i, i + chunkSize));
            }
        }
        return result;
    };
    return ArrayUtils;
}());
export { ArrayUtils };
export var arrayUtils = new ArrayUtils();
