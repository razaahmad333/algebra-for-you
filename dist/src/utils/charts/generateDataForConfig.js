"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDataForConfig = void 0;
var generateDataForConfig = function (_a) {
    var dataPoints = _a.dataPoints, validEquations = _a.validEquations;
    if (dataPoints.length === 0)
        return { labels: [], datasets: [] };
    var labels = dataPoints[0].xs;
    var datasets = dataPoints.map(function (_a, idx) {
        var xs = _a.xs, ys = _a.ys;
        return ({
            label: validEquations[idx],
            type: true ? "scatter" : "line",
            backgroundColor: "rgb(255, 255,".concat(idx).concat(idx * 5, ")"),
            borderColor: "rgb(255, 99, 132)",
            // yAxisID: xs[0] === xs[1] ? "first x axis" : "first y axis",
            // xAxisID: xs[0] === xs[1] ? "first y axis" : "first x axis",
            showLine: true,
            data: xs.map(function (xe, i) { return ({ y: ys[i], x: xe }); }),
        });
    });
    //   return {
    //     labels: [...labels, 3],
    //     datasets: [
    //       ...datasets,
    //       {
    //         label: "solution",
    //         type: "line",
    //         backgroundColor: "rgb(25, 25,25)",
    //         yAxisID: "first x axis",
    //         xAxisID: "first y axis",
    //         // borderColor: "rgb(0, 0, 0)",
    //         data: [...Array(labels.length).fill(0), 12],
    //         // barThickness: 1,
    //       },
    //     ],
    //   };
    return {
        labels: labels,
        datasets: datasets,
    };
};
exports.generateDataForConfig = generateDataForConfig;
