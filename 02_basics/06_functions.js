// functions

function sayMyName() {      // fun defination
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("B");
}

// sayMyname  // is the reference
sayMyName(); // function calling

function addTwoNum(num1, num2) {

    // there may be a case where user can give string , boolean instead of number
    // we have to first check these numbers
    console.log((num1 + num2));
}
addTwoNum("a",3);


function addTwoNumber(num1, num2) {

    return (num1 + num2);
}
let ans = addTwoNumber(4,3);
console.log(ans);
console.log(typeof(ans));

// IMP function with variable argumnets using rest operator

function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(10,20,30));

// handle object or passing object

let user = {
    username: "Shadab",
    price: 199
}

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user); 

///////// IMP //////

console.log(addone(5));   // calling before declaration
function addone(num) {
    return num + 1;
}


console.log(addTwo(5)); // but here same thing not work
let addTwo = function(num) {
    return num + 2;
}
