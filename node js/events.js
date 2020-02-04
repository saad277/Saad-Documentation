





var events = require('events');

var util= require ("util");

var Person=function(name) {

this.name=name;

};


util.inherits(Person,events.EventEmitter);


var james=new Person("james");
var mary=new Person("mary");
var jason=new Person("Jason");


arr=[james,mary,jason];



arr.map(function(names,id) {

console.log(names);

names.on("speak",function(message){

    console.log(names.name+" Speaks "+message);
});


});


james.emit("speak","English");

mary.emit("speak","German");
