test('Test to add a new user to the database | Author: Patrick Newell', ()=>{
    const reg = require('../server/controllers/registration');
    register = new reg();
    register.register("bob","bob","bob","bob","bob","bob");
})