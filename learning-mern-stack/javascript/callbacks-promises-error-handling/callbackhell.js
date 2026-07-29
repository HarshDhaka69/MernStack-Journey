// Callback Hell
// Callback Hell occurs when multiple callbacks are nested inside one another.
// It makes the code difficult to read, understand, and maintain.

// Step 1: Get Candies
function getCandies(callback1) {

    // Simulating a delay of 3 seconds
    setTimeout(() => {

        const candies = "🍬";

        console.log("In our getCandies method:", candies);

        // Pass the candies to the next callback
        callback1(candies);

    }, 3000);
}

// Step 2: Hand Over Keys
function handOverKeys(candies, callback2) {

    // Simulating a delay of 3 seconds
    setTimeout(() => {

        const keys = candies + "🔑";

        console.log("In our handOverKeys method:", keys);

        // Pass the keys to the next callback
        callback2(keys);

    }, 3000);
}

// Step 3: Employee Onboarding
function onboarding(keys, callback3) {

    // Simulating a delay of 3 seconds
    setTimeout(() => {

        const onboarded = keys + "👨‍💼";

        console.log("In our onboarding method:", onboarded);

        // Pass the onboarded employee to the next callback
        callback3(onboarded);

    }, 3000);
}

// Callback Hell Invocation
// Each function depends on the result of the previous function,
// which leads to nested callbacks.

getCandies((candies) => {

    handOverKeys(candies, (keys) => {

        onboarding(keys, (onboarded) => {

            console.log("Welcome to our restaurant 👨‍🍳");

        });

    });

});