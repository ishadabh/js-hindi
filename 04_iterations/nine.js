/// reduce method 

let arr = [1,2,3,4,5]

let initilValue = 5; 
let sum = arr.reduce( (accumaletor, currentValue) => accumaletor + currentValue, initilValue)
console.log(sum);


// second way 

let initVal = 2
let total = arr.reduce( function (acc, curr) {
    console.log(`acc: ${acc} and curr ${curr}`);
    return acc + curr;
} , initVal)

console.log(total);

