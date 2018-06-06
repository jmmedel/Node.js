
var event = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;

}


util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('Mary');
var ryu = new Person('ryu');
var people = [james,mary,ryu];
people.forEach(function(Person){
    person.on('speak',function(msg){
        console.log(person.name + 'Said: ' + msg);
    });
});


james.emit('speak','hey dudes');
