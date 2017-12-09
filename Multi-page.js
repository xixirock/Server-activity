var http = require ("http");
var fs = require ("fs");

var port = 7700;

var server = http.createServer(handleRequest);


function handleRequest(req, res) {
    var path = req.url;
    console.log(path);
    if(path === "/food"){
        fs.readFile(__dirname + "/food.html", function(err, data){
            res.writehead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }else if (path === "/movies"){
        fs.readFile(__dirname + "/movies.html", function(err, data){
            res.writehead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }else if (path === "/framworks"){
        fs.readFile(__dirname + "/frameworks.html", function(err, data){
            res.writehead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
};

server.listen(port, function(){
    console.log("server running");
    
});