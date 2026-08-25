// if we creat through constructor then it is singleton
// Object.create


// object declaration first way
const jsUser = {};


let myObj = {
    name : "Shadab",
    "department" : "CS",
    age : 20,
    location : "Noida",
    email : "shadab@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};

// accessing element
console.log(myObj.email);
console.log(myObj["email"]);
console.log(myObj["department"]);  // IMP only single way for this becoz it is string


// change the value
myObj.email = "Shadab"


// IMP, how to use symbol as key
let mySym1 = Symbol("key1");
let mySym2 = Symbol("key1");
let newObj = {
    name : "Shadab",
    mySym1: "myKey1",   // this is not a symbol
    [mySym2] : "myKey2",  // this is correct way
    age : 20,
    location : "Noida",
    email : "shadab@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};

console.log(typeof(newObj.mySym1));
console.log(typeof(newObj.mySym2));
console.log(newObj[mySym2]);   // only way to access the symbol


// IMP 
// Object.freeze(myObj) // not changable object

myObj.greeting = function() {
    console.log("Hello User");
}
console.log();
console.log("new outputs");

console.log(myObj.greeting);  // function return back, function is not executed only its reference  is back
console.log(myObj.greeting());

// New function 
myObj.greetingTwo = function() {
    console.log(`Hello User ${this.name}`);
}

console.log(myObj.greetingTwo);
console.log(myObj.greetingTwo());

console.log(myObj);
