// for in me hame keys milti aur for of me hame values milti h
// for in loop on objects

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObj) {
    console.log(key);
    console.log(myObj[key]);
    
}

// on array
let programming = ["js", "rb","py","java","cpp"];
for (const key in programming) {   // here we are get key as index
    console.log(key);
    console.log(programming[key]);
    
    
}

// for-in loop in map
// maps
let map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India");

console.log("for in on map");

for (const key in map) {   // nothing get somthing becoz map not iterable
                            // it stores entry (key, value);     
    console.log(key);
    
}