"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEquationValid = void 0;
var isEquationValid = function (equation) {
    if (equation === undefined) {
        return false;
    }
    if (typeof equation !== "string") {
        return false;
    }
    if (!equation.includes("=")) {
        return false;
    }
    equation = equation.toLocaleLowerCase();
    if (!equation.includes("x") && !equation.includes("y")) {
        return false;
    }
    return true;
};
exports.isEquationValid = isEquationValid;
