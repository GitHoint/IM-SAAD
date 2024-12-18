const returner = require("../server/controllers/return");
let ret = new returner();

console.log("Test to see if the server can update the status of a media so that it is returned always perform this after  the borrow test |  Author Patrick Newell");
ret.returnMedia(3);
console.log("Test Passed")