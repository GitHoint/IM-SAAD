search.searchMedia('mediaId = 1', function(res){
    var searcher = require('./App/server/controllers/search');
    var search = new searcher();
    console.log(res);
});