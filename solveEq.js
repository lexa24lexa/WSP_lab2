// JavaScript basics part 1 ex 1

function solveEq(a, b, c) {
  if (c === undefined || c === null || c === "") {
    // Linear equation ax + b = 0
    if (a === 0) {
      return b === 0 ? "Infinite solutions" : "No solution";
    } else {
      return "x = " + -b / a;
    }
  } else {
    // Quadratic equation ax^2 + bx + c = 0
    if (a === 0) {
      // Becomes linear
      if (b === 0) {
        return c === 0 ? "Infinite solutions" : "No solution";
      } else {
        return "x = " + -c / b;
      }
    } else {
      const delta = b * b - 4 * a * c;
      if (delta < 0) {
        return "No real solutions";
      } else if (delta === 0) {
        return "One real solution: x = " + -b / (2 * a);
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "Two real solutions: x1 = " + x1 + ", x2 = " + x2;
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
