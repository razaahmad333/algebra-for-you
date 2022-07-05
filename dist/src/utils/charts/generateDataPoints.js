"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDataPoints = void 0;
var getFilteredOptions_1 = require("./getFilteredOptions");
var generateDataPoints = function (_a) {
    var coefficients = _a.coefficients, options = _a.options;
    var a = coefficients.a, b = coefficients.b, c = coefficients.c;
    var _b = (0, getFilteredOptions_1.getFilteredOptions)(options), dataPoints = _b.dataPoints, start = _b.start, end = _b.end;
    if (dataPoints === 0 || start === end) {
        return { xs: [], ys: [] };
    }
    var incrementBy = (end - start) / dataPoints;
    var xs = [];
    var ys = [];
    var h = start;
    while (h <= end) {
        if (b === 0) {
            xs.push(-c / a);
            ys.push(h);
        }
        else if (a === 0) {
            xs.push(h);
            ys.push(-c / b);
        }
        else {
            xs.push(h);
            ys.push(-(a * h + c) / b);
        }
        h += incrementBy;
    }
    return { xs: xs, ys: ys };
};
exports.generateDataPoints = generateDataPoints;
