const num = 30;

// Print Number

console.log("Number:", num);

// Sum Of First N Number

let sum = 0;

for (let n = 0; n <= num; n++) {
    sum += n;
}

console.log("Sum Of First N Number:", sum);


// Sum Of All Digits of the Number Using For Loop

let str = num.toString();
let digitSum = 0;

for (let n = 0; n < str.length; n++) {
    digitSum += Number(str[n]);
}

console.log("Sum Of The Digits Of A Number:", digitSum);


// Prime Number Check Using While Loop

let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }

        i++;
    }
}

console.log("Is Number Prime:", isPrime);


// Armstrong Number Check

let power = 0;
let isArmstrong = false;

for (let n = 0; n < str.length; n++) {
    power += Number(str[n]) ** str.length;
}

if (num === power) {
    isArmstrong = true;
} else {
    isArmstrong = false;
}

console.log("Is Number Armstrong:", isArmstrong);


// Print Factors

let factors = "";

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors += i +", ";
    }
}

console.log("Factors:", factors);

// Print Table

console.log("Table of", num);

let table = 0;

for (let i = 1; i <= 10; i++) {
    table = num * i;
    console.log(num, "x", i, "=", table);
}