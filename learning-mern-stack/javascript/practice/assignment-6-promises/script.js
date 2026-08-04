const first = new Promise((resolve, reject) => {

    const a = Number(prompt("Enter First Number:"));
    const b = Number(prompt("Enter Second Number:"));

    if (b === 0) {
        reject("Division By Zero Not Allowed");
    } else {
        resolve(a / b);
    }

});

first
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((err) => {
        console.log("Error:", err);
    })
    .finally(() => {
        console.log("Calculation Completed");
    });