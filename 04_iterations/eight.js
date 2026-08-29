let myNums = [1,2,3,4,5,6,7,8,9,10];

// want to add 10 in every number
const newNums = myNums.map( (num) => num + 10) 
console.log(newNums);


const nums = myNums.map( (num) => {
    return num + 10;
}) 
console.log(nums);

///////////////////// Chaining ////////////////////////////

let val = myNums.map((num) => num *10 ).map( (num) => num + 1);
console.log(val);
