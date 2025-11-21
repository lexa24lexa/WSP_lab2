// JavaScript basics part 1 ex 2

/*jslint browser */
/*global console, document */

function count(arg) {
    if (arg === undefined || arg === null) {
        console.log(0);
        return 0;
    }

    if (typeof arg === "string") {
        console.log(arg.length);
        return arg.length;
    }

    if (typeof arg === "number") {
        const digits = arg.toString().replace(/-|\./g, "");
        console.log(digits.length);
        return digits.length;
    }

    if (Array.isArray(arg)) {
        console.log(arg.length);
        return arg.length;
    }

    console.log(0);
    return 0;
}

function countAndShow() {
    const input = document.getElementById("countInput").value;
    let parsedInput;

    if (input.trim() !== "" && !Number.isNaN(Number(input))) {
        parsedInput = Number(input);
    } else {
        if (input.startsWith("[") && input.endsWith("]")) {
            try {
                parsedInput = JSON.parse(input);
            } catch (ignore) {
                parsedInput = input;
            }
        } else {
            parsedInput = input;
        }
    }

    const result = count(parsedInput);
    document.getElementById("countOutput").textContent = "Length: " + result;
}
