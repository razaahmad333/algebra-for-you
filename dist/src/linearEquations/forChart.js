"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var labels = ["January", "February", "March", "April", "May", "June"];
var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};
exports.config = {
    type: "line",
    data: data,
    options: {},
};
