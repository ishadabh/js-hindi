//Arrays

// first way not contigeous
let myArr = [0, 1, 2, 3, 4, 5, true, "shadab"];

// Second Way
let arr = new Array(1,2,3,4,5);

console.log(myArr);
console.log(myArr[1]);


// Array Method

arr.push(10); // add value at last 
arr.push(13);
console.log(arr);

console.log(arr.pop()); // remove last value
console.log(arr);
console.log();
console.log();
console.log();

arr.unshift(70); // add at first index and shift all element to right-side
console.log(arr);
arr.unshift(60);
console.log(arr);


arr.shift();  // remove element at first index and shift all the elements to left-side
console.log(arr);

console.log(arr.includes(23));  // true / false

console.log(arr.indexOf(19)); // give inedx that exist in array otherwise -1 for not exist

/************* Imp ************/
let newArr = arr.join(); // convert array in string
console.log(typeof(newArr));

console.log();
console.log();

// slice, splice

console.log("A",arr);
let temp1 = arr.slice(1,4);
console.log(temp1);
console.log("B",arr);

let temp2 = arr.splice(2,5);
console.log(temp2);
console.log("C",arr);







