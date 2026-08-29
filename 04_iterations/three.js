// for of me direct value mil jata h
// for of

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
    
}


// maps
let map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India");
console.log(map);

for (let entry of map) {
    console.log(entry);
    
}

for (let [key,value] of map) {
    console.log(key, ": " , value);
    
}

const myObj = {
    'game1' : "NFS",
    "game2" : "SpiderMan"
}

// There is different way to iterate objects

for (const element of myObj) {
    console.log(element);
    
}