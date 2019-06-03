// Find shared values between two arrays
var men = ['Jim', 'Doug', 'Fred', 'Dave'];

var over50 = ['Angie', 'Dave', 'Jessica', 'Jim'];

var shared = over50.filter(person => men.includes(person));
console.log(shared);