// Get only unique values in array
var usernames = ['Jeff', 'Doug', 'John', 'John'];

// filter method
// var newUsernames = usernames.filter((name, index, array) => array.indexOf(name) === index ? name : '');
//   if(array.indexOf(name) === index) {
//     return name;
//   }
// console.log(newUsernames)


// Set
var set = [...new Set(usernames)];
console.log(set );