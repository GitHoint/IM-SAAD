const reg = require('../server/controllers/registration');

test('Test to add a new user to the database | Author: Patrick Newell', ()=>{
    register = new reg();
    register.register("bob","bob","bob","bob","bob","bob");
})