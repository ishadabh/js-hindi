const score = 400;
console.log(score);


const balance= new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance+"");
console.log();

console.log(balance.toFixed(3)); // 100.000

const num = 23.89666;
console.log(num.toPrecision(4));  // use carefully

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.length);


/***************** MATH *******************/

console.log();
console.log();
console.log();
console.log(Math.abs(-23));
console.log(Math.round(4.3));

console.log(Math.round(4.6));
console.log(Math.floor(4.3));
console.log(Math.ceil(4.1));
console.log(Math.sqrt(9));


console.log(Math.min(4, 3, 4, 5, 5,6,1,0,-1));


console.log(Math.floor(10*Math.random()));











