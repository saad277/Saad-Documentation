

var express = require("express");
var bodyParser = require('body-parser')


var app=express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set("view engine","ejs");


app.get("/index/:name",function(req,res){

console.log("Request Sent");

var json={ "work": "JavaScript " , 
        "profession": "Student"   , 
        "hobbies" :["Football","Badminton","PUBG"]   };

res.render("index",{  person : req.params.name ,json   });


});

app.get("/form",function(req,res){

res.render("form",{data : req.query} )

console.log(req.query);

console.log("Request Sent");

});


app.post("/form",urlencodedParser,function(req,res){

        console.log("Posted");
        
        
        console.log(req.body);
       
       
       
        res.render("submit",{data:req.body});
        
        
        
        
        });


app.listen(8080);


console.log("server started");