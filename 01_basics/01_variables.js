const accountId = 14453
let accountEmail = "shadabh25@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 not allowed
console.log(accountId);  

/*
Prefer not to use var
because of issue in block scop and functional scope
*/

accountEmail = "hc@ha"
accountPassword ="13245";
accountCity = "Bengaluru";

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])