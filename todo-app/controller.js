
var  data1=[  "walk","play" ];

var bodyparser=require("body-parser");

var urlencodedparser=bodyparser.urlencoded({    extended:false   });

module.exports=function(app){

    

app.get("/todo",function(req,res){

res.render("todo",{data:data1});

console.log("Requested Todo");

});


app.post("/todo",urlencodedparser,function(req,res){

    data1.push(req.body);
    console.log(req.body);
    res.json();

});


app.delete("/todo",function(req,res){



});


};

