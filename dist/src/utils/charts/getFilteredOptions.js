"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredOptions = void 0;
var getFilteredOptions = function (options) {
    var dataPoints = options.dataPoints, start = options.start, end = options.end;
    if (dataPoints < 0) {
        options.dataPoints = 0;
    }
    if (start > end) {
        options.start = end;
        options.end = start;
    }
    return options;
};
exports.getFilteredOptions = getFilteredOptions;
