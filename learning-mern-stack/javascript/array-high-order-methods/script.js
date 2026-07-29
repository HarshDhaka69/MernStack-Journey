// Higher Order Array Methods

const ourArray = [1, 2, 3, 4];

console.log("Original Array:", ourArray);

// Map
// Creates a new array by modifying every element.
const mapNewArr = ourArray.map((data) => data + 50);

console.log("Map New Array:", mapNewArr);

// Filter
// Creates a new array containing elements that satisfy the condition.
const filterNewArr = ourArray.filter((data) => data < 4);

console.log("Filter New Array:", filterNewArr);

// Find
// Returns the first element that satisfies the condition.
const findNewArr = ourArray.find((data) => data < 3);

console.log("Find New Array:", findNewArr);

// Reduce
// Reduces the array to a single value.
const reduceNewArr = ourArray.reduce((accumulatorVal, currentVal) => {
    return accumulatorVal + currentVal;
}, 0);

console.log("Reduce New Array:", reduceNewArr);

// ----------------------------------------------------
// Real-Life Example: Shopping Cart Total Bill
// Each product has a price and quantity.
// Calculate the total amount the customer has to pay.
// ----------------------------------------------------

const cartItems = [
    {
        name: "iPhone",
        price: 100000,
        quantity: 2
    },
    {
        name: "Samsung Galaxy",
        price: 10000,
        quantity: 3
    }
];

// Reduce is used to calculate the total cart value.
// Formula: Total = Price × Quantity of each product.

const cartValueArr = cartItems.reduce((accuVal, currVal) => {
    return accuVal + (currVal.price * currVal.quantity);
}, 0);

console.log("Total Cart Value:", cartValueArr);