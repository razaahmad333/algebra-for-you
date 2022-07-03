const { solveLinearEquation, UNIQUE_SOLUTION, INFINITE_SOLUTION, NO_SOLUTION } = require('../src/linearEquation');

test('solve linear system of equation', () => {

    const equation1 = "2x+y=1";
    const equation2 = "x+y=1";

    const solution = solveLinearEquation(equation1, equation2);

    const expectedSolution = {
        x: 0,
        y: 1,
        type: UNIQUE_SOLUTION
    }

    expect(solution).toEqual(expectedSolution);

    expect(solveLinearEquation("x+y=3", "x+y=1")).toEqual({
        x: undefined,
        y: undefined,
        type: NO_SOLUTION
    })

    expect(solveLinearEquation("x+y=3", "2x+2y=6")).toEqual({
        x: undefined,
        y: undefined,
        type: INFINITE_SOLUTION
    })
});

test('if equation do not contain x or y, throw error', () => {

    const equation1 = "2+1=1";
    const equation2 = "x+y=1";
    expect(() => solveLinearEquation(equation1, equation2)).toThrowError();
});

test('if equation do not contain =, throw error', () => {

    const equation1 = "2x+y";
    const equation2 = "x+y=1";
    expect(() => solveLinearEquation(equation1, equation2)).toThrowError();
});

test("if string is not passed as an argument(equation1 or equation2) throw error", () => {
    expect(() => solveLinearEquation()).toThrowError();
    expect(() => solveLinearEquation(1, [])).toThrowError();
    expect(() => solveLinearEquation(1, { eq: "x" })).toThrowError();
    expect(() => solveLinearEquation([1, 3], 2)).toThrowError();
});