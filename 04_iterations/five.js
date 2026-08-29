// for each loop
// 

let coding = ["js" , "ruby", "python", "cpp"];

// basic function => function name () {};
// but here inside this forEach we are using fall-back fuction
// fall-back function does not any name 
coding.forEach( function (value) {
    console.log(value);
    
} )

// one more variation we can use arrow function also
// arroe fun ******* greet = () => {}
coding.forEach( (item) => {
    console.log(item);
    
} )

console.log();
console.log();

///////////////////// another way 
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

console.log();

/***********************************************************/

coding.forEach((item, index, arr) => {
    console.log(item,index, arr);
})


// datebase ke ander data array ke form me aati h aur har ek value ojects ke form me hota h 
myCoding = [
    {
        languageName : "javascript",
        fileName : "js"
    },
    {
        languageName : "java",
        fileName : "java"
    },
    {
        languageName : "python",
        fileName : "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName); // here item contains object not a single value
})