// JavaScript Hoisting
// console.log(a)
var a = 10;

function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}
sayHi()
