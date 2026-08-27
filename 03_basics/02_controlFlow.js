// if
// if(condition) {   // condition is true then only we go iside the if braceses

// }

if(2 == 2) {
    console.log(`Inside if block`);
    
}

// comparison operators 
/*
    =   assignment operator
    !=  not equal
    <   less than
    >   greater than
    <=  less than equal
    >= greater than equal
    == equlas to 
    === equals to and type of the operands are must be same then it return true
    !== same as above but works opposite
    
*/

if(2 == "2") {
    console.log(`true1`);
    
}
if(2 === "2") {     // this is not true 
    console.log(`true2`);  
    
}
if(2 !== "2") {     // this is true 
    console.log(`true3`);  
    
}


// if-else

if(2 === "2") {     // this is not true 
    console.log(`condition is true`);  
    
} else {
    console.log("condition is false");
    
}


//***************** Switch ****************//
/* 
    switch (key) {

        case value:
            break;

        default :
            break;
    }
*/


let month = 3;

switch(month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default :
        console.log("invalid input");
            
}