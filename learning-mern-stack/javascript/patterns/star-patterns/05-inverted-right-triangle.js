// Inverted Right Aligned Triangle

let n = 5;

for ( let i = 0 ; i < n ; i++){
    let row = ""
    for (let j = 0 ; j < i ; j++){
        row += " "
    }
    for ( let j = 0 ; j < n - i ; j++){
        row += "*"
    }
    console.log(row)
}

// Output

// *****
//  ****
//   ***
//    **
//     *