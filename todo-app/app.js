var express=require("express");


var app=express();

var controller=require("./controller");


app.set("view engine","ejs");


app.use(express.static("./public/assets"));


controller(app);

app.listen(8080);

console.log("Server running port : 8080");


