// Assignment

// Finding Highest Number In A Array

const largestNumberArr = [2, 5, -1, -7, -5, 7, 10, 5, 8, 1];

function highestNum(num) {

    let highest = num[0];

    for (let i = 1; i < num.length; i++) {

        if (num[i] > highest) {
            highest = num[i];
        }

    }

    console.log("Highest Number In The Array:", highest);
}

highestNum(largestNumberArr);

// Sum of All Elements In An Array

const sumOfArr = [5, -4, 0, 8, 9, -30, 5, 4, 3]

let summation = function (num) {

    let sum = 0

    for (let i = 0; i < sumOfArr.length; i++) {
        sum += num[i]
    }

    console.log("Sum Of The Array : ", sum);

}

summation(sumOfArr);

// Total Odd Numbers In The Array

const oddNumArr = [2, 3, 4, 5, 6, 7, 8, 9, 15];

let oddNum = (num) => {
    let oddArr = [];
    let i = 0;

    while (i < num.length) {
        if (num[i] % 2 !== 0) {
            oddArr.push(num[i]);
        }

        i++;
    }

    console.log("Odd Number Array:", oddArr);
    console.log("Total Odd Numbers:", oddArr.length);
};

oddNum(oddNumArr);

// 