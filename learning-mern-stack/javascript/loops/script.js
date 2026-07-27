// For Loops
// Real World Example: Taking attendance of 30 students

// Loop with step count: Incrementing by 4
for (let i = 18; i <= 36; i += 4) {
    console.log("Harsh", i);
}

// Reverse loop: Decrementing down to 1
for (let i = 18; i > 0; i--) {
    console.log("Harsh", i);
}

// Infinite For Loop
// for (;;) {
//     console.log("Infinite Loop");
// }


// While Loops
// Real World Example: Waiting for the bus
// Working : Checks condition first before executing the code block

console.log("While Loop");

let count1 = 0;

while (count1 < 5) {
    console.log(count1);
    count1++;
}


// Do While Loops
// Real World Example: ATM PIN Verification
// Working : Executes the code block first, then checks the condition

console.log("Do While Loop");

let count2 = 0;

do {
    console.log(count2);
    count2++;
} while (count2 < 5);


// Break Statement
// Working : Exits the loop immediately when the condition is met

console.log("Break Statement");

let count3 = 0;

while (count3 < 5) {
    console.log(count3);

    if (count3 === 3) {
        break;
    }

    count3++;
}


// Continue Statement
// Working : Skips the current iteration and moves to the next iteration

console.log("Continue Statement");

let count4 = 0;

while (count4 < 5) {

    count4++;

    if (count4 === 3) {
        continue;
    }

    console.log(count4);
}