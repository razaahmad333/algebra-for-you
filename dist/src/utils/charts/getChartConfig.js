"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChartConfig = void 0;
var equations_1 = require("../equations");
var generateDataPoints_1 = require("./generateDataPoints");
var generateDataForConfig_1 = require("./generateDataForConfig");
var defaultOptions = {
    dataPoints: 10,
    start: -10,
    end: 10,
};
var getChartConfig = function (_a) {
    var validEquations = _a.validEquations, _b = _a.options, options = _b === void 0 ? defaultOptions : _b;
    var dataPoints = validEquations.map(function (equation) {
        var coefficients = (0, equations_1.getEquationCoefficient)(equation.expression);
        var _a = (0, generateDataPoints_1.generateDataPoints)({ coefficients: coefficients, options: options }), xs = _a.xs, ys = _a.ys;
        return { xs: xs, ys: ys };
    });
    return {
        type: "scatter",
        data: (0, generateDataForConfig_1.generateDataForConfig)({ dataPoints: dataPoints, validEquations: validEquations }),
        options: {
            scales: {
                x: {
                    // type: "linear",
                    position: "bottom",
                },
            },
        },
    };
};
exports.getChartConfig = getChartConfig;
