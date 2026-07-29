// Example 1: Creating and Handling a Promise

const ticket = new Promise((resolve, reject) => {

    const isBoarded = false;

    // If the passenger is allowed to board
    if (isBoarded) {
        resolve("You Can Board The Plane");
    } else {
        // If the passenger is not allowed to board
        reject("You Can't Board The Plane");
    }

});

ticket
    .then((data) => {
        console.log("Yeah!!", data);
    })
    .catch((data) => {
        console.log("Ohh Noooooooo", data);
    })
    .finally(() => {
        // Executes whether the Promise is resolved or rejected
        console.log("This Will Execute Every Time");
    });

// Example 2: Promise Chaining


// Returns a Promise that resolves with a candy after 3 seconds
function getCandies() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous task using setTimeout
        setTimeout(() => {
            const isCandyAvailable = true;
            if (isCandyAvailable) {
                const candies = "🍬";
                // Resolve the Promise with the candy
                resolve(candies);
            } else {
                // Reject the Promise if candy is unavailable
                reject("Candy Is Not Available");
            }
        }, 3000);
    });
}


// Takes the candy and returns a Promise that resolves with keys
function handOverKeys(candies) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous task using setTimeout
        setTimeout(() => {
            const keys = candies + "🔑";
            // Resolve the Promise with the keys
            resolve(keys);
        }, 3000);
    });
}

// Takes the keys and returns a Promise that resolves with the final result
function onBoarding(keys) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous task using setTimeout
        setTimeout(() => {
            const onBoarded = keys + "🏢";
            // Resolve the Promise with the onboarding result
            resolve(onBoarded);
        }, 3000);
    });

}

getCandies()
    .then((candies) => {
        console.log("Here Is Your Candy:", candies);
        return handOverKeys(candies);
    })
    .then((keys) => {
        console.log("Here Are Your Keys:", keys);
        return onBoarding(keys);
    })
    .then((onBoarded) => {
        console.log("You Can Now Board The Plane:", onBoarded);
    })
    .catch((err) => {
        console.log("Error Occurred:", err);
    })
    .finally(() => {
        console.log("Happy To Assist You");
    });

// Example 3: Async / Await

// Using async/await to handle Promises sequentially

// async function onBoardClient() {

//     try {

//         // Wait for the candy Promise to resolve
//         const candy = await getCandies();
//         console.log("Here Is Your Candy:", candy);

//         // Wait for the keys Promise to resolve
//         const key = await handOverKeys(candy);
//         console.log("Here Are Your Keys:", key);

//         // Wait for the onboarding Promise to resolve
//         const onBoard = await onBoarding(key);
//         console.log("You Can Now Board The Plane:", onBoard);

//     } catch (err) {

//         // Executes if any awaited Promise is rejected
//         console.log("Error Detected:", err);

//     } finally {

//         // Executes whether the Promise is resolved or rejected
//         console.log("Happy To Assist You");
//     }
// }

// // Call the async function
// onBoardClient();