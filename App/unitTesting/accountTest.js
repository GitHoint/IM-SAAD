const account = require("../server/controllers/account");
let manager = new account();

console.log("Test to see if all account details cna be changed for a user")

manager.email("newEmail@email.com",20);

console.log("Test Passed");