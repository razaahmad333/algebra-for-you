"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_SOLUTION = exports.UNIQUE_SOLUTION = exports.INFINITE_SOLUTION = exports.getTypeOfSolution = exports.getEquationOnOneSide = exports.solveLinearEquation = void 0;
var math_1 = __importDefault(require("./math"));
/**
 * It solves linear equation.
 * @param {string} equation1 - linear equation like 4x + y = 3.
 * @param {string} equation2 - linear equation like x - y = 1.
 * @param {object} options - options for solving linear equation.
 *
 * @param {boolean} options.caseSensitive - if true, it will solve equation with case sensitive. Default is false.
 * @class Solution
 * @type {Object}
 * @property {string} type - type of solution.
 * @property {number} x - x coordinate.
 * @property {number} y - y coordinate.
 *
 * @returns {Solution} { type: type_of_solution, x: xsol, y: ysol }  - solution of linear equation.
 */
function solveLinearEquation(equation1, equation2, options) {
    if (options === void 0) { options = { caseSensitive: false }; }
    if (equation1 === undefined) {
        throw new Error("Equation 1 is undefined");
    }
    if (equation1 === undefined && equation2 === undefined) {
        throw new Error("Equation 1 and equation 2 is undefined");
    }
    if (equation2 === undefined) {
        throw new Error("Equation 2 is undefined");
    }
    if (typeof equation1 !== "string" || typeof equation2 !== "string") {
        throw new Error("Invalid input, it should be a string");
    }
    if (!equation1.includes("=") || !equation2.includes("=")) {
        throw new Error("Invalid equation");
    }
    equation1 = options.caseSensitive ? equation1 : equation1.toLocaleLowerCase();
    equation2 = options.caseSensitive ? equation2 : equation2.toLocaleLowerCase();
    if ((!equation1.includes("x") || !equation2.includes("x")) &&
        (!equation1.includes("y") || !equation2.includes("y"))) {
        throw new Error("Invalid equation, must contain x or y");
    }
    var a1 = math_1.default.derivative(getEquationOnOneSide(equation1), "x").toString();
    var b1 = math_1.default.derivative(getEquationOnOneSide(equation1), "y").toString();
    var c1 = math_1.default.evaluate(getEquationOnOneSide(equation1), { x: 0, y: 0 });
    var a2 = math_1.default.derivative(getEquationOnOneSide(equation2), "x").toString();
    var b2 = math_1.default.derivative(getEquationOnOneSide(equation2), "y").toString();
    var c2 = math_1.default.evaluate(getEquationOnOneSide(equation2), { x: 0, y: 0 });
    var xFactor = Number(b1) * Number(c2) - Number(b2) * Number(c1);
    var yFactor = Number(a2) * Number(c1) - Number(a1) * Number(c2);
    var constFactor = Number(a1) * Number(b2) - Number(a2) * Number(b1);
    if (constFactor === 0) {
        return {
            type: getTypeOfSolution(xFactor, yFactor, constFactor),
            x: undefined,
            y: undefined,
        };
    }
    var solY = yFactor / constFactor;
    var solX = xFactor / constFactor;
    return {
        x: solX === -0 ? 0 : solX,
        y: solY === -0 ? 0 : solY,
        type: getTypeOfSolution(xFactor, yFactor, constFactor),
    };
}
exports.solveLinearEquation = solveLinearEquation;
/**
 *
 * @param {string} eq - linear equation like 4x + y = 3.
 * @returns {string} - equation on one side of the equation like 4x + y - 3.
 *
 */
function getEquationOnOneSide(eq) {
    var equation = eq.split("=");
    return math_1.default.simplify("".concat(equation[0], "-(").concat(equation[1], ")")).toString();
}
exports.getEquationOnOneSide = getEquationOnOneSide;
/**
 *
 * @param {number} xFactor
 * @param {number} yFactor
 * @param {number} constFactor
 * @returns {string} - type of solution
 */
var INFINITE_SOLUTION = "Infinite solutions, ( Consistent and Dependent)";
exports.INFINITE_SOLUTION = INFINITE_SOLUTION;
var UNIQUE_SOLUTION = "Unique solution ( Consistent and Independent) ";
exports.UNIQUE_SOLUTION = UNIQUE_SOLUTION;
var NO_SOLUTION = "No solution ( Inconsistent and Independent )";
exports.NO_SOLUTION = NO_SOLUTION;
function getTypeOfSolution(xFactor, yFactor, constFactor) {
    if (xFactor - yFactor === 0 && xFactor - constFactor === 0) {
        return INFINITE_SOLUTION;
    }
    if (constFactor !== 0) {
        return UNIQUE_SOLUTION;
    }
    if (constFactor === 0 && xFactor !== 0) {
        return NO_SOLUTION;
    }
}
exports.getTypeOfSolution = getTypeOfSolution;
