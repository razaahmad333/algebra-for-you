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
declare function solveLinearEquation(equation1: string, equation2: string, options?: {
    caseSensitive: boolean;
}): {
    type: string | undefined;
    x: undefined;
    y: undefined;
} | {
    x: number;
    y: number;
    type: string | undefined;
};
/**
 *
 * @param {string} eq - linear equation like 4x + y = 3.
 * @returns {string} - equation on one side of the equation like 4x + y - 3.
 *
 */
declare function getEquationOnOneSide(eq: string): string;
/**
 *
 * @param {number} xFactor
 * @param {number} yFactor
 * @param {number} constFactor
 * @returns {string} - type of solution
 */
declare const INFINITE_SOLUTION = "Infinite solutions, ( Consistent and Dependent)";
declare const UNIQUE_SOLUTION = "Unique solution ( Consistent and Independent) ";
declare const NO_SOLUTION = "No solution ( Inconsistent and Independent )";
declare function getTypeOfSolution(xFactor: number, yFactor: number, constFactor: number): "Infinite solutions, ( Consistent and Dependent)" | "Unique solution ( Consistent and Independent) " | "No solution ( Inconsistent and Independent )" | undefined;
export { solveLinearEquation, getEquationOnOneSide, getTypeOfSolution, INFINITE_SOLUTION, UNIQUE_SOLUTION, NO_SOLUTION, };
