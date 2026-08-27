const email = "shadab@.ai";

if(email) {      // any string value is treat as true
    console.log("got user email");
    
} else {
    console.log("don't have user email");
    
}

// falsy values
/*
        false
        0
        -0
        null
        NaN
        BigInt as 0n
        "" , empty string
        undefind 
*/

// truthy values
/*
        "0"
        "false"
        " " , single space
        []
        {}
        function(){} empty function

*/

let userEmail = [];
if(userEmail.length === 0) {
    console.log("empty array");
    
} else {
    console.log("non-empty array");
    
}

let obj = {};
if(Object.keys(obj).length === 0) {    // it return array of keys 
    console.log("empty object");
    
} else {
    console.log("non-empty object");
    
}

///////IMP

if(false == 0) {
    console.log("true");
    
} else {
    console.log("false");
    
}

if(false == '') {
    console.log("true");
    
} else {
    console.log("false");
    
}

if(0 == '') {
    console.log("true");
    
} else {
    console.log("false");
    
}


// Nillish coalecing operator (??): null , undefind ke uper
// used in database
// ternary operator is dfferent from ??

let val1;

val1 = 5 ?? 10;

val1 = null ?? 10

let val2;
val2 = undefined ?? 15;
console.log(val1);
console.log(val2);

let val3 = null ?? 10 ?? 15; // it prefers fisrt not null and undefined value
console.log(val3);


// ternary operator

// condition ? true : false

let price = 100;

price <= 80 ? console.log("less than 80") : console.log("greater than 80");



