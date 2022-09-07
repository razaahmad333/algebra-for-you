"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolutionOfEquation = exports.SystemOfEquation = void 0;
var getChartConfig_1 = require("../utils/charts/getChartConfig");
var equations_1 = require("../utils/equations");
var interfaces_1 = require("./interfaces");
var equation_1 = require("../interfaces/equation");
var SystemOfEquation = /** @class */ (function () {
    function SystemOfEquation(equations) {
        var _a = (0, equations_1.getInEquationFormat)(equations, equation_1.TwoVariable), allEquations = _a.equations, validEquations = _a.validEquations, invalidEquations = _a.invalidEquations;
        this.equations = allEquations;
        this.validEquations = validEquations;
        this.invalidEquations = invalidEquations;
    }
    SystemOfEquation.prototype.getAllEquations = function () {
        return this.equations;
    };
    SystemOfEquation.prototype.getValidEquations = function () {
        return this.validEquations;
    };
    SystemOfEquation.prototype.getInvalidEquations = function () {
        return this.invalidEquations;
    };
    SystemOfEquation.prototype.getSolutionOfEveryPossiblePairOfEquations = function () {
        var solutions = [];
        if (this.validEquations.length === 1) {
            return {
                problem: "Only one equation, no intersection",
                solution: "Provide Atleast two intersecting equations",
            };
        }
        for (var i = 0; i < this.validEquations.length - 1; i++) {
            for (var j = i + 1; j < this.validEquations.length; j++) {
                var equation1 = this.validEquations[i];
                var equation2 = this.validEquations[j];
                var solution = (0, equations_1.getSolutionOfPair)(equation1, equation2);
                solutions.push({
                    firstEquationId: equation1.id,
                    secondEquationId: equation2.id,
                    solution: solution,
                });
            }
        }
        return solutions;
    };
    SystemOfEquation.prototype.getIntersectionOfEquations = function () {
        var solutions = [];
        if (this.validEquations.length === 1) {
            return {
                problem: "Only one equation, no intersection",
                solution: "Provide Atleast two intersecting equations",
            };
        }
        for (var i = 0; i < this.validEquations.length; i++) {
            for (var j = i; j < this.validEquations.length; j++) {
                var equation1 = this.validEquations[i];
                var equation2 = this.validEquations[j];
                var solution = (0, equations_1.getSolutionOfPair)(equation1, equation2);
                if (solution.type === interfaces_1.UNIQUE_SOLUTION) {
                    solutions.push({
                        firstEquationId: equation1.id,
                        secondEquationId: equation2.id,
                        solution: solution,
                    });
                }
            }
        }
        return solutions;
    };
    SystemOfEquation.prototype.getSolutionOfEquation = function () {
        var equations = this.validEquations;
        var firstEquation = equations[0];
        var secondEquation = equations[1];
        return (0, equations_1.getSolutionOfPair)(firstEquation, secondEquation);
    };
    SystemOfEquation.prototype.getChartConfig = function () {
        return (0, getChartConfig_1.getChartConfig)({ validEquations: this.validEquations });
    };
    SystemOfEquation.prototype.getEquationByIndex = function (index) {
        return this.equations[index];
    };
    return SystemOfEquation;
}());
exports.SystemOfEquation = SystemOfEquation;
function getSolutionOfEquation(equations) {
    var firstEquation = equations[0];
    var secondEquation = equations[1];
    var coefficients1 = (0, equations_1.getEquationCoefficient)(firstEquation);
    var coefficients2 = (0, equations_1.getEquationCoefficient)(secondEquation);
    return (0, equations_1.getSolution)(coefficients1, coefficients2);
}
exports.getSolutionOfEquation = getSolutionOfEquation;
