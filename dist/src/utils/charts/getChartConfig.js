"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChartConfig = void 0;
var lodash_1 = __importDefault(require("lodash"));
var equations_1 = require("../equations");
var isEquationValid_1 = require("../equations/isEquationValid");
var generateDataPoints_1 = require("./generateDataPoints");
var generateDataForConfig_1 = require("./generateDataForConfig");
var defaultOptions = {
    dataPoints: 10,
    start: -10,
    end: 10,
};
var getChartConfig = function (_a) {
    var equations = _a.equations, _b = _a.options, options = _b === void 0 ? defaultOptions : _b;
    var validEquations = lodash_1.default.dropWhile(equations, function (equation) {
        return !(0, isEquationValid_1.isEquationValid)(equation);
    });
    var dataPoints = validEquations.map(function (equation) {
        var coefficients = (0, equations_1.getEquationCoefficient)(equation);
        var _a = (0, generateDataPoints_1.generateDataPoints)({ coefficients: coefficients, options: options }), xs = _a.xs, ys = _a.ys;
        return { xs: xs, ys: ys };
    });
    return {
        type: "line",
        data: (0, generateDataForConfig_1.generateDataForConfig)({ dataPoints: dataPoints, validEquations: validEquations }),
        options: {},
    };
};
exports.getChartConfig = getChartConfig;
