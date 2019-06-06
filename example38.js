// Use function declarations for more flexible code
age = 30;
var age;
"30"

name = 'john';
let name;
"error name is not defined"

email = 'john@gmail.com';
const email;
"error missing initializer in const declaration"

fn();
var fn = function() {};
"error fn is not a function"

func();
let func = () => {};
"error func is not a defined"

log();
function log() {
  console.log('john');
}
"john"

log('jeff');
function log(name) {
  console.log(name);
}
"jeff"

function log(name) {
  console.log(name);
}
log('jeff');
"jeff"