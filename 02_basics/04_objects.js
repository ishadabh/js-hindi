// object declaration by new keyword

let tinderUser = new Object();
console.log(tinderUser);


tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);


let regularUser = {
    email : "spme@gmail.com",
    fullName : {
        userFullName : {
            fisrtName : "Shadab",
            lastName : "Hussain"
        }
    }
}
console.log(regularUser.fullName.userFullName.fisrtName);


// object combinig
let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "c"}

let obj3 = {obj1,obj2};
console.log(obj3);


//let obj4 = Object.assign(obj1, obj2);  // all elements are assign to first obj1 
//console.log(obj4);
console.log(obj1);

let obj5 = Object.assign({} , obj1, obj2);
console.log(obj5);
console.log(obj1);

// another way to do this 
let obj6 = {...obj1, ...obj2};  // spread method
console.log(obj6);


// getting all the keys
console.log(tinderUser);
console.log(Object.keys(tinderUser));  // datatype array

console.log(Object.entries(tinderUser)); // array of array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));


