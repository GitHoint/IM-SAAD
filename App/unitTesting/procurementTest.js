const procure = require("../server/controllers/procurement");
let procurement = new procure();

console.log("Test to see if the server can add a new media item to the database | Author: Patrick Newell")

procurement.procure("NewStock","100 Words","A new journal","journal","1999");

console.log("Test Passed");