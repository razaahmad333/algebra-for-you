const { solveLinearEquation } = require('./linearEquation')
const { sum, sub, mult, div } = require('./basic')
const mathjs = require('mathjs')

exports.sum = sum;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
exports.solveLinearEquation = solveLinearEquation;
exports.mathjs = mathjs;

module.exports = {
    sum,
    sub,
    mult,
    div,
    solveLinearEquation,
    mathjs
}