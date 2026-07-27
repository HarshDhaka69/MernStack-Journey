// Normal Script

let age = 12;

console.log("You Can Vote");
console.log("You Can't Vote");

// IF Condition

let age = 12;

if (age >= 18) {
    console.log("You Can Vote")
}

console.log("You Can't Vote");

// IF ELSE Condition

let age = 18;

if (age >= 18) {
    console.log("You Can Vote")
} else {
    console.log("You Can't Vote");
}

// Nested If Condition

let age = 18;

if (age >= 18) {
    if (age >= 60) {
        console.log("You Are Senior Citizen. You Can Vote Online");
    }

    console.log("You Can Vote");
} else {
    console.log("You Can't Vote");
}


// Ladder Condition ( ELSE IF )

let age = 18;

if (age >= 60) {
    console.log("You Are Senior Citizen You Can Vote Online");
}else if (age >= 18) { 
    console.log("You Can Vote"); 
}else {
    console.log("You Can't Vote");
}
