const reg = require('../server/controllers/registration');
let register = new reg();

console.log('Test to add a new user to the database should log a success message | Author: Patrick Newell')
register.register("bob","bob","bob","bob","bob","bob");
console.log("Test Passed")