"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEquationValidForOneVariable = exports.isEquationValidForTwoVariable = exports.isEquationValid = void 0;
var getEquationFromString_1 = require("./getEquationFromString");
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
    var ifConstant = Number((0, getEquationFromString_1.getEquationOnOneSide)(equation)) === 0 ||
        Number((0, getEquationFromString_1.getEquationOnOneSide)(equation));
    if (ifConstant) {
        return false;
    }
    return true;
};
exports.isEquationValid = isEquationValid;
var isEquationValidForTwoVariable = function (equation, variableNames) {
    if (variableNames === void 0) { variableNames = ["x", "y"]; }
    if (!(0, exports.isEquationValid)(equation)) {
        return false;
    }
    var x1 = variableNames[0], x2 = variableNames[1];
    if (!variableNames.includes(x1) || !variableNames.includes(x2)) {
        return false;
    }
    return true;
};
exports.isEquationValidForTwoVariable = isEquationValidForTwoVariable;
var isEquationValidForOneVariable = function (equation, variableName) {
    if (variableName === void 0) { variableName = "x"; }
    if (!(0, exports.isEquationValid)(equation)) {
        return false;
    }
    if (!equation.includes(variableName)) {
        return false;
    }
    return true;
};
exports.isEquationValidForOneVariable = isEquationValidForOneVariable;
