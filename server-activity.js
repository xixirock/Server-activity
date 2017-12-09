var http = require ("http");
//create http that listen on port 7000
var GOOD_PORT = 7000;

//port 7000 always tells user something good about themselves
function handleGoodReq(req, res) {
    response.end("You've made a server: " + req.url);
};

var goodServer = http.createServer(handleGoodReq);

goodServer.listen(GOOD_PORT, function(){
    console.log("Listening on: http://localhost:" + GOOD_PORT);
    console.log("You look good");
});

//create port that listen on port 7500
var BAD_PORT = 7500;

//port 7500 always tells user something bad about themselves
function handleBadReq(req, res) {
    response.end("Listening on: http://localhost:" + BAD_PORT);
};

var badServer = http.createServer(handleBadReq);

badServer.listen(BAD_PORT, function(){
    console.log("Listening on: http://localhost:" + BAD_PORT);
    console.log("You look like crap, de heck's a matter with you?");
});
