"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTypeOfSolution = void 0;
var interfaces_1 = require("../../linearEquations/interfaces");
var findTypeOfSolution = function (factor, coefficient1, coefficient2) {
    var xFactor = factor.xFactor, yFactor = factor.yFactor, constFactor = factor.constFactor;
    if (xFactor - yFactor === 0 && xFactor - constFactor === 0) {
        return interfaces_1.INFINITE_SOLUTION;
    }
    if (constFactor === 0 && xFactor !== 0) {
        return interfaces_1.NO_SOLUTION;
    }
    if (coefficient1.a === 0 && coefficient2.a === 0) {
        return interfaces_1.NO_SOLUTION;
    }
    if (coefficient1.b === 0 && coefficient2.b === 0) {
        return interfaces_1.NO_SOLUTION;
    }
    return interfaces_1.UNIQUE_SOLUTION;
};
exports.findTypeOfSolution = findTypeOfSolution;
