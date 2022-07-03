const math = require('mathjs');

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

function solveLinearEquation(equation1, equation2, options = { caseSensitive: false }) {
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

    if (!equation1.includes("x") || !equation2.includes("x")) {
        throw new Error("Invalid equation, must contain x");
    }

    if (!equation1.includes("y") || !equation2.includes("y")) {
        throw new Error("Invalid equation, must contain y");
    }

    let a1 = math.derivative(getEquationOnOneSide(equation1), "x").toString();
    let b1 = math.derivative(getEquationOnOneSide(equation1), "y").toString();
    let c1 = math.evaluate(getEquationOnOneSide(equation1), { x: 0, y: 0 });
    let a2 = math.derivative(getEquationOnOneSide(equation2), "x").toString();
    let b2 = math.derivative(getEquationOnOneSide(equation2), "y").toString();
    let c2 = math.evaluate(getEquationOnOneSide(equation2), { x: 0, y: 0 });

    let xFactor = Number(b1) * Number(c2) - Number(b2) * Number(c1);
    let yFactor = Number(a2) * Number(c1) - Number(a1) * Number(c2);
    let constFactor = Number(a1) * Number(b2) - Number(a2) * Number(b1);

    if (constFactor === 0) {
        return {
            type: getTypeOfSolution(xFactor, yFactor, constFactor),
            x: undefined,
            y: undefined
        }
    }

    let solY = yFactor / constFactor;
    let solX = xFactor / constFactor;

    return {
        x: Number(math.parse(solX).toString()),
        y: Number(math.parse(solY).toString()),
        type: getTypeOfSolution(xFactor, yFactor, constFactor)
    }
}

/**
 * 
 * @param {string} eq - linear equation like 4x + y = 3.
 * @returns {string} - equation on one side of the equation like 4x + y - 3.
 *                     
 */

function getEquationOnOneSide(eq) {
    let equation = eq.split("=");
    return math.simplify(`${equation[0]}-(${equation[1]})`).toString();
}

/**
 * 
 * @param {number} xFactor 
 * @param {number} yFactor 
 * @param {number} constFactor 
 * @returns {string} - type of solution
 */


const INFINITE_SOLUTION = "Infinite solutions, ( Consistent and Dependent)";
const UNIQUE_SOLUTION = "Unique solution ( Consistent and Independent) ";
const NO_SOLUTION = "No solution ( Inconsistent and Independent )";


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

exports.solveLinearEquation = solveLinearEquation;
exports.INFINITE_SOLUTION = INFINITE_SOLUTION;
exports.UNIQUE_SOLUTION = UNIQUE_SOLUTION;
exports.NO_SOLUTION = NO_SOLUTION;
