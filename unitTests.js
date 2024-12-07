var searcher = require('./App/server/controllers/search');
var search = new searcher();

search.searchMedia('mediaId = 1', function(res){
    console.log("Test to show that a test media can be searched for by the server check the console to see if a test media is logged")
    console.log(res);
});