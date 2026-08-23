
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getUTCDay());


let myCreatedDate = new Date(2023, 6, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date("01-04-2004");
console.log(myCreatedDate.toDateString());


/********************Time stamp*********************/

let timeStamp = Date.now();
let today = new Date();
console.log(timeStamp);
console.log(today.getTime());

console.log(timeStamp - today.getTime());


/**********************************/ 

let newDate = new Date();

newDate.toLocaleDateString('default',{
    weekday: "long",
    timeZone : "Asia/Kolkata"
}) ;
console.log(newDate);
