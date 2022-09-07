"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidityOfEquation = exports.getValidEquations = void 0;
var equation_1 = require("../../interfaces/equation");
var isEquationValid_1 = require("./isEquationValid");
var getRandomId_1 = require("../common/getRandomId");
var getValidEquations = function (equations, equationType) {
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
exports.getValidEquations = getValidEquations;
var getValidityOfEquation = function (equation, equationType) {
    switch (equationType) {
        case equation_1.OneVariable:
            return (0, isEquationValid_1.isEquationValidForOneVariable)(equation);
        case equation_1.TwoVariable:
            return (0, isEquationValid_1.isEquationValidForTwoVariable)(equation);
        default:
            return false;
    }
};
exports.getValidityOfEquation = getValidityOfEquation;
