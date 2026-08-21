let score1 = "32abc";
console.log(typeof(score1));

let valueInNumber1 = Number(score1);

console.log(typeof(valueInNumber1));
console.log(valueInNumber1); // NaN (Not a number)



let score2 = null;
console.log(typeof(score2));

let valueInNumber2 = Number(score2);

console.log(typeof(valueInNumber2));
console.log(valueInNumber2); // 0



let score3 = undefined;
console.log(typeof(score3));

let valueInNumber3 = Number(score3);

console.log(typeof(valueInNumber3));
console.log(valueInNumber3); // NaN (Not a number)



let score4 = true;
console.log(typeof(score4));

let valueInNumber4 = Number(score4);

console.log(typeof(valueInNumber4));
console.log(valueInNumber4); // 1


// "33" -> 33
// "33abc" ->  NaN
// trur -> 1 / false -> 0

let isLoggedIn1 = 1

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(typeof(booleanIsLoggedIn1));

console.log(booleanIsLoggedIn1);


let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof(booleanIsLoggedIn2));

console.log(booleanIsLoggedIn2);


let isLoggedIn3 = "Shadab"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(typeof(booleanIsLoggedIn3));
console.log(booleanIsLoggedIn3);

let isLoggedIn4 = null
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(typeof(booleanIsLoggedIn4));
console.log(booleanIsLoggedIn4);



let num = 33;
let stringNum = String(num);
console.log(typeof(stringNum));
console.log(stringNum);


// ******************* Operations *****************


let val = 3;
let negVal = -val;
console.log(negVal);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 to power 3
console.log(2/2);



let str1 = "hello";
let str2 = " Shadab";

let str3 = str1 + str2;
console.log(str3);


console.log("1" + 2); // 12 
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2 "); // 32


console.log(true);
console.log(+true);
// console.log(true+); error

console.log(+"");  // 0


let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1,num2,num3);




