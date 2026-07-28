// Function
// A function is a reusable block of code that performs a specific task.
// It helps reduce code duplication and improves code readability.

// Normal 

const a = 10;
const b = 8;
const sum = a + b;
console.log("Result", sum);

const x = 5;
const y = 6;
const add = x + y;
console.log("Result", add);

// Now Using Functions To Reduce Redundancy

// Named Function
// A named function has its own name and can be called anywhere after its declaration.

function addition(m, n) {
    const result = m + n;
    console.log("Result", result);
    return result;
}

addition(6, 9);

// Anonymous Function / Function Expression
// An anonymous function has no name and is stored in a variable.
// Anonymous functions must be declared before they are called.

let summation = function (o, p) {
    const result = o + p;
    return result;
};

console.log("Result", summation(10, 10));

// Nested Function
// A nested function is a function defined inside another function.

function squareAdd(s, t) {
    const c = square(s);
    const d = square(t);

    function square(num) {
        return num * num;
    }

    return c + d;
}

console.log("Result", squareAdd(10, 10));

// Arrow Function
// Arrow functions provide a shorter syntax for writing functions.

let greet = () => {
    console.log("Hello");
};

greet();

// Single-Line Arrow Function
// If the function has only one statement, curly braces and return can be omitted.

let greet1 = () => console.log("Hello");

greet1();

// Callback Function
// A callback function is passed as an argument to another function and is executed later.

const calculate = (g, h, operation) => {
    return operation(g, h);
};

// Anonymous Callback Function

const adding = calculate(4, 5, function (n1, n2) {
    return n1 + n2;
});

console.log("Addition:", adding);

// Named Callback Function

function sub(a, b) {
    return a - b;
}

const subtraction = calculate(4, 5, sub);

console.log("Subtraction:", subtraction);

// Arrow Callback Function

const mul = (a, b) => a * b;

const multiplication = calculate(4, 5, mul);

console.log("Multiplication:", multiplication);

// Find First Negative Number
// The find() method returns the first element that satisfies the given condition.

const arr = [2, 4, 1, 3, 9, -1, -4, -3, 0];

// Callback Function

const printFirstNegativeNumber = (num) => {
    return num < 0;
};

const firstNegativeNumber = arr.find(printFirstNegativeNumber);

console.log("First Negative Number:", firstNegativeNumber);