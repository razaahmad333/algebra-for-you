"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolutionOfPair = void 0;
var getEquationCoefficient_1 = require("./getEquationCoefficient");
var getSolution_1 = require("./getSolution");
var getSolutionOfPair = function (equation1, equation2) {
    var coefficients1 = (0, getEquationCoefficient_1.getEquationCoefficient)(equation1.expression);
    var coefficients2 = (0, getEquationCoefficient_1.getEquationCoefficient)(equation2.expression);
    return (0, getSolution_1.getSolution)(coefficients1, coefficients2);
};
exports.getSolutionOfPair = getSolutionOfPair;
