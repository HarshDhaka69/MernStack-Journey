//  Square ( 5x5 ) Star Pattern

let n = 5;

for ( let i = 0 ; i < n ; i++){
    let row = "";
    for ( let j = 1 ; j <=n ; j++){
        row += "* ";
    }
    console.log(row);
}