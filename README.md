# Algebra-for-you
this is for 5th grade to advanced level for solving algebra problems

## How to install it using npm


```shell
 npm install algebra-for-you
```

## How to use it

```js
import { solveLinearEquation } from 'algebra-for-you';

const solution = solveLinearEquation("2x + y = 1","x + y = 1");

// { x: 0, y: 1, type: 'Unique solution ( Consistent and Independent) ' }

```


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
        <script src="https://unpkg.com/algebra-for-you@1.0.0/dist/index.umd.js"></script>
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
            document.getElementById('solution').innerHTML = `Solution: x = ${solution.x}, y = ${solution.y}, type = ${solution.type}`;
            console.log(solution);
           


        </script>

    </body>

</html>
```

## Feel free to raise issues or contribute

