let userAndPassword = 'pepito2017,12345';
let username = userAndPassword.substr(0,10);
console.log("username",username);
let password = userAndPassword.substr(11,16);
console.log("password", password);
console.log("The user", username, "has", password,"as password");