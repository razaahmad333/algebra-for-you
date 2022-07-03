const {
    sum,
    div,
    mult,
    sub
} = require('../src/basic')

test("3 + 2 should be 5", () => {
    expect(sum(3, 2)).toBe(5);
});


test("3 - 2 should be 1", () => {
    expect(sub(3, 2)).toBe(1);
});

test("3 * 2 should be 6", () => {
    expect(mult(3, 2)).toBe(6);
});

test("3 / 2 should be 1.5", () => {
    expect(div(3, 2)).toBe(1.5);
});