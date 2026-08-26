// Arrow function

const user = {
    username: "Shadab",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    } 
}
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();
console.log(this);  // we are in node environment, and this is refers to empty object


function chai() {
    username = "Shadab"
    console.log(this);
    console.log(this.username); 
}

chai();


const code = function() {
    let username = "Shadab" 
    console.log(this);
    console.log(this.username);
}
code();


// ****************** ARROW FUNCTION *******************


console.log( );
console.log();
console.log();

const myChai = () => { // remove function keyword put arrow after parenthesis
    let username = "Shadab" 
    console.log(this);
    console.log(this.username);
}
myChai();

let addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4));


// implicit return arrow function
let sumTwo = (num1, num2) => num1 + num2;

console.log(sumTwo(5,4));
