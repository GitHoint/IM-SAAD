let search = require('../server/controllers/search');
let searcher = new search();
test('Test that the search controller media search method returns an object from the database when first id is queries| Author: Patrick Newell', async () =>{
    searcher.searchMedia("mediaId = 1", async function(res){
        console.log(res);
        done();
    });
        
});