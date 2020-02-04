var http=require ("http");
var fs=require("fs");

var jsonObject={

"England": "Liverpool",
"Spain"  : " Barcelona "

}
var server=http.createServer(function(req,res){

console.log("Request Sent");
console.log(req.url);

if(req.url === "/json") {
res.writeHead(200, {"Content" : "application/JSON"});

res.end(JSON.stringify(jsonObject));

}
else if(req.url=="/home") {

var read=fs.createReadStream("index.html");

read.pipe(res);

}
else {

res.writeHead(404, {"Content" : " text/plain"});
res.end("Not available");

}

});
server.listen(8080,"127.0.0.1");

console.log("server is running");