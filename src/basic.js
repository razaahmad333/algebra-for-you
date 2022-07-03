"use strict"

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} - a + b
 */

const sum = (a, b) => {
    return a + b;
}



/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} - a - b
 */

const sub = (a, b) => {
    return a - b;
}


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} - a * b
 */


const mult = (a, b) => {
    return a * b;
}


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} - a / b
 */

const div = (a, b) => {
    return a / b;
}

exports.sum = sum;
exports.sub = sub;
exports.mult = mult;
exports.div = div;

