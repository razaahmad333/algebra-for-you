"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveEquationInOneVariable = void 0;
var getEquationFromString_1 = require("../utils/equations/getEquationFromString");
var math_1 = __importDefault(require("../math"));
var isEquationValid_1 = require("../utils/equations/isEquationValid");
var defaultOptions = {
    variableName: "x",
};
var solveEquationInOneVariable = function (equation, options) {
    var _a;
    if (options === void 0) { options = defaultOptions; }
    var variableName = options.variableName;
    if (!(0, isEquationValid_1.isEquationValidForOneVariable)(equation, variableName)) {
        return {
            type: "error",
            message: "Invalid equation",
        };
    }
    var equationSimplifiedOnOneSide = (0, getEquationFromString_1.getEquationOnOneSide)(equation);
    var coefficientOfVariable = Number(math_1.default.derivative(equationSimplifiedOnOneSide, variableName).toString());
    var remainingConstant = math_1.default.evaluate(equationSimplifiedOnOneSide, (_a = {},
        _a[variableName] = 0,
        _a));
    return -remainingConstant / coefficientOfVariable;
};
exports.solveEquationInOneVariable = solveEquationInOneVariable;
