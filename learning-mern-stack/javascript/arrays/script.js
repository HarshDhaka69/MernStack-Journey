// Array

let studentsArray = ["abc", "xyz", "lkj", 123, true, function dummyFunc() {}];
// Index Number:       0      1      2     3    4              5

// Print the entire array
console.log(studentsArray);

// Access an element using its index
console.log(studentsArray[0]);

// Print the total number of elements in the array
console.log(studentsArray.length);

// Copy the reference of an array
let newArr = studentsArray;

// Modify an element using its index
studentsArray[2] = "JavaScript";

console.log(studentsArray);

// Changes in one reference affect the original array
newArr[0] = "Students";

console.log(newArr);
console.log(studentsArray);

// Find the index of an element
console.log(studentsArray.indexOf("xyz"));

// Check if an element exists in the array
console.log(studentsArray.includes(123));

// Add an element at the end of the array
studentsArray.push("Laptop");
console.log(studentsArray);

// Add an element at the beginning of the array
studentsArray.unshift("Mobile");
console.log(studentsArray);

// Remove the last element from the array
studentsArray.pop();
console.log(studentsArray);

// Remove the first element from the array
studentsArray.shift();
console.log(studentsArray);


let marks = [98, 78, 65, 34, 66, 34, 22, 92];

console.log(marks);

// Sort the array in ascending alphabetical order
marks.sort();
console.log(marks);

// Create a new array from index 2 to index 4
let subArrMarks = marks.slice(2, 5);
console.log(subArrMarks);

// Original array remains unchanged after slice()
console.log(marks);