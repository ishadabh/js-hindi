const name = "Shadab";
const repoCount = 50;

console.log(name + repoCount + "value"); // not more preferable
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shadab-Hussain");
console.log(gameName.length);
console.log(gameName.charAt(1));
console.log(gameName[1]);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("d"));
console.log();
console.log();

const firstName = gameName.substring(0,6);
console.log(firstName);

const secName = gameName.substring(7,gameName.length);
console.log(secName);

const newName = gameName.slice(3, -2);
console.log(newName);

//******************  ******************//

let str = "        Shadab         ";
let newstr = str.trim();
console.log(str);

console.log(newstr);


const url = "htttps://shadab.com/hussain%20chaudhry%20hppr"; // if someone added spaces then browser make it %20
const newUrl= url.replace("%20","_");
console.log(newUrl);

const coorectUrl= url.replaceAll("%20","_");
console.log(coorectUrl);


//***************** ****************** //

const myurl= url.replaceAll("%20","_");

const urlArray = myurl.split("_");
console.log(urlArray);





