"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolution = void 0;
var interfaces_1 = require("../../linearEquations/interfaces");
var findTypeOfSolution_1 = require("./findTypeOfSolution");
var getSolution = function (coefficients1, coefficients2) {
    var a1 = coefficients1.a, b1 = coefficients1.b, c1 = coefficients1.c;
    var a2 = coefficients2.a, b2 = coefficients2.b, c2 = coefficients2.c;
    var xFactor = b1 * c2 - b2 * c1;
    var yFactor = a2 * c1 - a1 * c2;
    var constFactor = a1 * b2 - a2 * b1;
    var typeOfSolution = (0, findTypeOfSolution_1.findTypeOfSolution)({ xFactor: xFactor, yFactor: yFactor, constFactor: constFactor }, coefficients1, coefficients2);
    if (typeOfSolution === interfaces_1.UNIQUE_SOLUTION) {
        var x = xFactor / constFactor;
        var y = yFactor / constFactor;
        return { x: x, y: y, type: typeOfSolution };
    }
    return { x: null, y: null, type: typeOfSolution };
};
exports.getSolution = getSolution;
