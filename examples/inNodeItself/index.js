// import algebra from '../../dist/src/index.js';
const algebra = require('../../dist/src/index')

// module es6
// import * as something from './some.js'
//commonjs
const something = require('./some');

console.log(algebra.sub(1, 3))
console.log(something)


const book = require('./books.json')
console.log(book)