//Scope
var name = 'shekhar'; //Global

console.log('name is', name);
console.log('age is', age);

function scopeTest() {
    var i = 100; //local scope
    console.log('i is = ', i);
}
scopeTest();
console.log(name);
// place is not accessible outside 
// the code below doesnt execute since i is invalid
//console.log('i is = ', i);



var age = 46;

let funtoo = function() {
    apple = 50; //global scope
    console.log('Aditya');
}
funtoo();
console.log(apple);