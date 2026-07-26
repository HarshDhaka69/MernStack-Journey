// Dynamic Typing

let a = 123;
let c = "Harsh";

console.log("The value of a is", a);
console.log("The type of a is", typeof a);

console.log("The value of c is", c);
console.log("The type of c is", typeof c);

a = false;

console.log("The value of a is", a);
console.log("The type of a is", typeof a);

// Undefined

let b;

console.log("The value of b is", b);
console.log("The type of b is", typeof b);

// Null

let sum = null;

console.log("The value of sum is", sum);
console.log("The type of sum is", typeof sum);

// Addition

let num1 = 23;
let num2 = 25;
sum = 0;  // To Remove Grabage Values 

sum = num1 + num2;

console.log("The value of sum is", sum);
console.log("The type of sum is", typeof sum);

// Type Coercion

let v1 = 12;
console.log(v1 + 1);

let v2 = "12";
console.log(v2 + 1);

// String Conversion

let result;
let abc = 123;

result = String(abc);

console.log("The value of abc is", abc);
console.log("The type of abc is", typeof abc);
console.log("The type of result is", typeof result);

// Number Conversion

let name1 = "Harsh";
name1 = Number(name1);

console.log(name1);
console.log(typeof name1);

let name2 = "123";
name2 = Number(name2);

console.log(name2);
console.log(typeof name2);

// Boolean Conversion

let name3 = 123;
name3 = Boolean(name3);

console.log(name3);
console.log(typeof name3);