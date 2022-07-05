# Algebra-for-you
this is for 5th grade to advanced level for solving algebra problems

## How to install it using npm


```shell
 npm install algebra-for-you
```

## How to use it

### with module
means in `package.json`
```json
 ...
 "type":"module",
 ...
```

```js
import algebra from 'algebra-for-you';

// do basic maths
console.log(algebra.sum(1, 2));
console.log(algebra.sub(10, 2));
console.log(algebra.mult(4, 2));
console.log(algebra.div(8, 2));

// solve linear equation in two variables (x and y)
const { solveLinearEquation } = algebra;

const solution = solveLinearEquation("2x + y = 1","x + y = 1");
// { x: 0, y: 1, type: 'Unique solution ( Consistent and Independent) ' }

```

### with commonjs
means in `package.json`
```json
 ...
 "type":"commonjs",
 ...
 ```
 *or if there is no such field of "type"


```js
const algebra = require('algebra-for-you');

const solution = algebra.solveLinearEquation("2x + y = 1","x + y = 1");

// { x: 0, y: 1, type: 'Unique solution ( Consistent and Independent) ' }

```

now you can **[mathjs](https://mathjs.org/)** utilities with `algebra.mathjs`

```js
const math = algebra.mathjs;

math.round(math.e, 3)                // 2.718
math.atan2(3, -3) / math.pi          // 0.75
math.log(10000, 10)                  // 4
math.sqrt(-4)                        // 2i
math.derivative('x^2 + x', 'x')      // 2*x+1

```

*NOTE: `algebra` is just a placeholder, you can use any name you want.
`algebra-for-you` has default export.



<br/>
<br/>

## How to use it in the browser

### just paste this line in header of your html file


```html
<script src="https://unpkg.com/algebra-for-you@latest/dist/index.umd.js"></script>
```

### Here is the full code 

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Algebra For You </title>
        <script src="https://unpkg.com/algebra-for-you@latest/dist/index.umd.js"></script>
    </head>

    <body>

        <h2>Addition</h2>
        <h3 id="sumOfTwoNumbers"></h3>

        <h2>Solving system of Linear equations</h2>

        <h3>Equation1 => x + y = 3</h3>
        <h3>Equation2 => x - y = 1</h3>

        <h3 id="solution"></h3>

        <script>

            // use the basic arithematic utils

            const sumOfTwoNumbers = AlgebraForYou.sum(1, 2);
            document.getElementById('sumOfTwoNumbers').innerHTML = `1 + 2 = ${sumOfTwoNumbers}`;

            //similarly 
            const substraction = AlgebraForYou.sub(6, 2); // 4
            const multiplication = AlgebraForYou.mult(3, 2); // 6
            const division = AlgebraForYou.div(10, 2); // 5

            // lets solve system of linear equations

            const equation1 = "x + y = 3";
            const equation2 = "x - y = 1";

            const solution = AlgebraForYou.solveLinearEquation(equation1, equation2);
            const textToEmbed = `Solution: x = ${solution.x}, y = ${solution.y}, type = ${solution.type}`;
            document.getElementById('solution').innerHTML = textToEmbed;
            console.log(solution);

            const math = AlgebraForYou.mathjs;

            math.round(math.e, 3)                // 2.718
            math.atan2(3, -3) / math.pi          // 0.75
            math.log(10000, 10)                  // 4
            math.sqrt(-4)                        // 2i
            math.derivative('x^2 + x', 'x')      // 2*x+1



        </script>

    </body>

</html>
```

## Feel free to raise issues or contribute

### **[mathjs](https://mathjs.org/)** : the library I'm using to do stuff which it can simplify for me.