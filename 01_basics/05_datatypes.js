// Premitive 7 in number (call by value)

// string 
// number
// boolean
// null 
// undefind 
// symbol 

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(typeof(id));
console.log(id == anotherId);



// BigInt
const bigNumber = 1345738920771647789908098n
console.log(typeof(bigNumber));



// Reference Type Or non-primitive (call by reference)

// array
let heros = ["h1", "h2", "h3"];
console.log(typeof(heros));

// Objects (imp) -> key : value
let myObj={
    name: "Shadab",
    age : 24
}
console.log(typeof(myObj));


// Functions

// as a variable 
const myFunction = function(){
    console.log("hero");  
}
console.log(typeof(myFunction));
