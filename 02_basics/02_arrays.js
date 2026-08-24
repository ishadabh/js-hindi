let marvel_heros = ["thor", "Ironman", "spiderman"];
let dc_heros = ["superman", "flsah", "Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

let new_heros = marvel_heros.concat(dc_heros);
console.log(new_heros);


let all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);


let arr = [1,2,3, [4,5,6],6,[7,5,[8,9,10]]];

let newArr = arr.flat(Infinity); // pass depth of array
console.log(newArr);

console.log(Array.isArray("Shadab"));
console.log(Array.from("Shadab")); // convert into array

console.log(Array.from({name:"Shadab"})); // intresting


let score1 = 100;
let score2 = 200;
let score3= 300;
console.log(Array.of(score1,score2,score3));





