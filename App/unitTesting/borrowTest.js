const borrow = require("../server/controllers/borrow");
let bor = new borrow();

console.log("Test to see if the server can uoate the status code of a media to indicate it is borrowed | Auhtor: Patrick Newell");
bor.borrower(27,3);
console.log("Test Passed");