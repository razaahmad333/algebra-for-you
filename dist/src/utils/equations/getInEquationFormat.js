"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidityOfEquation = exports.getInEquationFormat = void 0;
var equation_1 = require("../../interfaces/equation");
var isEquationValid_1 = require("./isEquationValid");
var getRandomId_1 = require("../common/getRandomId");
var getInEquationFormat = function (equations, equationType) {
    var allEquations = equations.map(function (equation) { return ({
        id: (0, getRandomId_1.getRandomId)(),
        expression: equation,
        valid: (0, exports.getValidityOfEquation)(equation, equationType),
    }); });
    return {
        equations: allEquations,
        validEquations: allEquations.filter(function (equation) { return equation.valid; }),
        invalidEquations: allEquations.filter(function (equation) { return !equation.valid; }),
    };
};
exports.getInEquationFormat = getInEquationFormat;
var getValidityOfEquation = function (equation, equationType) {
    switch (equationType) {
        case equation_1.OneVariable:
            return (0, isEquationValid_1.isEquationValidForOneVariable)(equation);
        case equation_1.TwoVariable:
            return (0, isEquationValid_1.isEquationValidForTwoVariable)(equation);
        default:
            return (0, isEquationValid_1.isEquationValid)(equation);
    }
};
exports.getValidityOfEquation = getValidityOfEquation;
