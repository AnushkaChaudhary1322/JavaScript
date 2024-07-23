const accountId = 144553
let accountEmail = "anushka@google.com"
var accountPassword = "23451"
accountCity = "Jaipur"
/* Javascript is a safe language 
you can use this method to declare a variable 
but it is not prefered
*/

let accountState;

// accountId = 2 // not allowed

accountEmail = "ac@ac.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
prefer not to use var because of issue in block scope
and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);