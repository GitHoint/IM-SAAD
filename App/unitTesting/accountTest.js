const account = require("../server/controllers/account");
let manager = new account();

<<<<<<< HEAD
console.log("Test to see if all account details cna be changed for a user | Author: Oliver Topley")
=======
console.log("Test to see if all account details cna be changed for a user | Author: Patrick Newell")
>>>>>>> bffb91f0d78c885b878a1bc2f1a71dd4b2b9b7b7

manager.email("newEmail@email.com",20);

console.log("Test Passed");