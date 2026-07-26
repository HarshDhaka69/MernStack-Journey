// Operators in JS

// Assignment Operator
let a = 5;
let b = 3;

let sum = a + b;
console.log("Addition:", sum);

// Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment Operator (++)
let abc = 10;
console.log(abc);

abc++;
console.log(abc);

// Decrement Operator (--)
let xyz = 10;
console.log(xyz);

xyz--;
console.log(xyz);

// Post Increment
let postInc = 10;

console.log(postInc);
console.log(postInc++);
console.log(postInc); // Incremented value is shown here

// Operand and Operator explanation
// postInc : operand
// ++ : operator

// Pre Increment
let preInc = 10;

console.log(preInc);
console.log(++preInc); // Increment happens first, then value is printed

// Operand and Operator explanation
// preInc : operand
// ++ : operator

// Post Decrement
let postDec = 10;

console.log(postDec);
console.log(postDec--);
console.log(postDec); // Decremented value is shown here

// Operand and Operator explanation
// postDec : operand
// -- : operator

// Pre Decrement
let preDec = 10;

console.log(preDec);
console.log(--preDec); // Decrement happens first, then value is printed

// Operand and Operator explanation
// preDec : operand
// -- : operator

// Short Hand Operators
let x = 10;

x += 5;
console.log(x);

x -= 2;
console.log(x);

x *= 3;
console.log(x);

x /= 2;
console.log(x);

x %= 4;
console.log(x);

x **= 2;
console.log(x);

// Comparison Operators

// Equals (==)
// Strict Equals (===)
// Not Equals (!=)
// Strict Not Equals (!==)
// Greater Than (>)
// Less Than (<)
// Greater Than or Equal (>=)
// Less Than or Equal (<=)

let p = 5;
let q = "5";

console.log("Equals:", p == q);
console.log("Strict Equals:", p === q);
console.log("Not Equals:", p != q);
console.log("Strict Not Equals:", p !== q);
console.log("Greater Than:", p > 3);
console.log("Less Than:", p < 10);
console.log("Greater Than or Equal:", p >= 5);
console.log("Less Than or Equal:", p <= 4);

// Logical AND (&&)
let andA = true;
let andB = false;

console.log(andA && andB);

// Logical OR (||)
let orA = true;
let orB = false;

console.log(orA || orB);

// Logical NOT (!)
let notA = true;

console.log(!notA);
