"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDataForConfig = void 0;
var colors_1 = __importDefault(require("./colors"));
var lodash_1 = __importDefault(require("lodash"));
var generateDataForConfig = function (_a) {
    var dataPoints = _a.dataPoints, validEquations = _a.validEquations;
    if (dataPoints.length === 0)
        return { labels: [], datasets: [] };
    var labels = dataPoints[0].xs;
    var colors = lodash_1.default.shuffle(colors_1.default);
    var datasets = dataPoints.map(function (_a, idx) {
        var xs = _a.xs, ys = _a.ys;
        return ({
            label: validEquations[idx].expression,
            type: true ? "scatter" : "line",
            backgroundColor: colors[idx],
            borderColor: colors[idx],
            showLine: true,
            data: xs.map(function (xe, i) { return ({ y: ys[i], x: xe }); }),
        });
    });
    return {
        labels: labels,
        datasets: datasets,
    };
};
exports.generateDataForConfig = generateDataForConfig;
