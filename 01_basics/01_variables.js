const accountId=144553
let accountEmail="nayan@google.com"
var accountPassword="12345"
accountCity=" Jaipur"

// accountId=2 //not allowed
accountEmail="nb@b.com"
accountPassword="212121"
accountCity="ghaziabad"
let accountState;
console.log(accountId);
/* prefer not to use var
because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

