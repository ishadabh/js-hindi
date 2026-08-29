let coding = ["js" , "ruby", "python", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item); 
    return item; 
} )

console.log(values); // foreach koi bhi value return nhi krta h


// *************************************
const myNum = [1,2,3,4,5,6,7,8,9,10];

let val = myNum.filter( (num) => num > 4)   // ye bhi apne ander call back hi leta h
console.log(val);                          // aur values bhi return krta h
                                           // here arrow fun implicit return  

let temp = myNum.filter( (num) => {    // why [] empty, identify problem here 
    num > 4
});
console.log(temp);

let temp2 = myNum.filter( (num) => { 
    return num > 4
});
console.log(temp2);


/*********************** filter wala same kaam hum forEach se krna chahte h ************************/

const numArr = [];

myNum.forEach( (num) => {
    if(num > 4) {
        numArr.push(num);   
    }
} )
console.log(numArr);
