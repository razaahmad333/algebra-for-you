"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolutionOfEquation = exports.SystemOfEquation = void 0;
var getChartConfig_1 = require("../utils/charts/getChartConfig");
var equations_1 = require("../utils/equations");
var SystemOfEquation = /** @class */ (function () {
    function SystemOfEquation(equations) {
        this.equations = equations;
    }
    SystemOfEquation.prototype.getSolutionOfEquation = function () {
        var equations = this.equations;
        var firstEquation = equations[0];
        var secondEquation = equations[1];
        var coefficients1 = (0, equations_1.getEquationCoefficient)(firstEquation);
        var coefficients2 = (0, equations_1.getEquationCoefficient)(secondEquation);
        return (0, equations_1.getSolution)(coefficients1, coefficients2);
    };
    SystemOfEquation.prototype.getChartConfig = function () {
        return (0, getChartConfig_1.getChartConfig)({ equations: this.equations });
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
