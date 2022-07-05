"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquationCoefficient = void 0;
var getEquationFromString_1 = require("./getEquationFromString");
var math_1 = require("../../math");
var getEquationCoefficient = function (equationString) {
    var equation = (0, getEquationFromString_1.getEquationOnOneSide)(equationString);
    var a = math_1.default.derivative(equation, "x").toString();
    var b = math_1.default.derivative(equation, "y").toString();
    var c = math_1.default.evaluate(equation, { x: 0, y: 0 });
    return { a: Number(a), b: Number(b), c: Number(c) };
};
exports.getEquationCoefficient = getEquationCoefficient;
