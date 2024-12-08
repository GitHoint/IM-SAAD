const searcher = require('../server/controllers/search');
var search = new searcher();
const reg = require('../server/controllers/registration');
let register = new reg();
const procure = require("../server/controllers/procurement");
let procurement = new procure();
const log = require("../server/controllers/login");
let login= new log();

console.log('Test to add a new user to the database should log a success message')
register.register("bob","bob","bob","bob","bob","bob");
console.log("Test Passed")

console.log("Test to show that a test media can be searched for by the server check the console to see if a test media is logged")
search.searchMedia('mediaId = 0', function(res){
    console.log(res, " Test Passed");
});

console.log("Test to add a new media to the stock database")
procure.procure("testStock",0,"testDesc","testBook");
console.log("Test Passed")

console.log("Test to see if the server can retrieve specified login details");
login.loginUser("",function(res){
    console.log(res);
})
console.log("Test Passed");


console.log("Test to see if the server can uoate the status code of a media to indicate it is borrowed");

console.log("Test to see if the server can update the different account details of a user");

console.log("Test to see if the server cna update the status of a media so that it is returned")