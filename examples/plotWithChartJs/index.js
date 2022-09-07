const equationsWithThreeVariable = {
    first: "x+y+z=1",
    second: "x+2y+z=2",
    third: "x-y+z=-1"
}


const system = " 2x + y + 6z = 9; 8x + 3y + 2z = 13; x + 5y + z = 7"


let x = 0, y = 0, z = 0, p = 0, q = 0;
for (let i = 0; i < 10; i++) {

    x = (1 / 8) * (13 - 3 * y - 2 * z);
    y = (1 / 5) * (7 - x - z);
    z = (1 / 6) * (9 - 2 * x - y);

    console.log({
        x: Math.round(x), y: Math.round(y), z: Math.round(z),
    })

}
