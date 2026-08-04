// Compound Interest Calculator

// a = amount
// p = principal
// r = rate of interest
// n = number of times interest is compounded in a year
// t = time of interest

// Formula 
//  a = p ( 1 + ( r / n))^nt


let a = 0;
let p = 20000;
let r = 2 / 100;
let n = 1;
let t = 3;

// Formula
a = p * (1 + (r / n)) ** (n * t);

console.log("Compound Interest After 3 Years Is :", a);