"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquationOnOneSide = exports.getEquationFromString = void 0;
var math_1 = require("../../math");
var getEquationFromString = function (equationString) {
    var equation = math_1.default.parse(equationString);
    return equation;
};
exports.getEquationFromString = getEquationFromString;
var getEquationOnOneSide = function (equationString) {
    var equation = equationString.split("=");
    return math_1.default.simplify("".concat(equation[0], "-(").concat(equation[1], ")")).toString();
};
exports.getEquationOnOneSide = getEquationOnOneSide;
