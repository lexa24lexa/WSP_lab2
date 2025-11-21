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

function solveAndShow() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const cVal = document.getElementById("c").value;
  const c = cVal === "" ? undefined : parseFloat(cVal);
  const result = solveEq(a, b, c);
  document.getElementById("output").textContent = result;
}
