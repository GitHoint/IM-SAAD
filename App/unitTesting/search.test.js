
test('Test that the search controller media search method returns an object from the database when first id is queries| Author: Patrick Newell', async () =>{
    let search = require('../server/controllers/search');
    let searcher = new search();
    searcher.mediaSearch("mediaId = 1", function(res){
        console.log(res);
    });
});