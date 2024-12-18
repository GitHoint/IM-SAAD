const log = require("../server/controllers/login");
let login= new log();

console.log("Test to see if the server can retrieve specified login details | Author: Joshua Osborne");
login.loginUser("'staff@staff.com'",function(res){
    console.log(res);
    console.log("Test Passed");
});
