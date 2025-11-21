// JavaScript basics part 1 ex 1

/*jslint browser */
/*global console */

function solveEq(a, b, c) {
    if (c === undefined) {
        // Linear equation: ax + b = 0
        if (a === 0) {
            console.log(
                b === 0
                ? "Infinite solutions"
                : "No solution"
            );
        } else {
            console.log("x = " + (-b / a));
        }
    } else {
        // Quadratic equation: ax^2 + bx + c = 0
        if (a === 0) {
            // Becomes linear
            if (b === 0) {
                console.log(
                    c === 0
                    ? "Infinite solutions"
                    : "No solution"
                );
            } else {
                console.log("x = " + (-c / b));
            }
        } else {
            const delta = (b * b) - (4 * a * c);

            if (delta < 0) {
                console.log("No real solutions");
            } else if (delta === 0) {
                console.log("One real solution: x = " + (-b / (2 * a)));
            } else {
                const x1 = (-b + Math.sqrt(delta)) / (2 * a);
                const x2 = (-b - Math.sqrt(delta)) / (2 * a);

                console.log(
                    "Two real solutions: x1 = " + x1 + ", x2 = " + x2
                );
            }
        }
    }
}

solveEq(2, 4);
solveEq(1, -3, 2);
solveEq(1, 2, 1);
solveEq(0, 0, 5);
solveEq(0, 0, 0);
solveEq(0, 5, 10);
