"use strict";

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - a + b
 */

const sum = (a: number, b: number): number => {
  return a + b;
};

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - a - b
 */

const sub = (a: number, b: number): number => {
  return a - b;
};

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - a * b
 */

const mult = (a: number, b: number): number => {
  return a * b;
};

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - a / b
 */

const div = (a: number, b: number): number => {
  return a / b;
};

export { sum, sub, mult, div };
