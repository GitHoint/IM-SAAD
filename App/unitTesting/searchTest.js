const searcher = require('../server/controllers/search');
var search = new searcher();

console.log("Test to show that a test media can be searched for by the server check the console to see if a test media is logged ")
search.searchMedia('mediaId = 3', function(res){
    console.log(res);
    console.log(" Test Passed")
});