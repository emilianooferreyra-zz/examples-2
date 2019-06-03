// Iterating over an object
var username = {
  first: 'John',
  last: 'Doe'
};

// for (let u in username) {
//   if(username.hasOwnProperty(u)) {
//     console.log(u, username[u]);
//   }
// }

// for (let u of Object.keys(username)) {
//   console.log(u, username[u]);
// }

Object.entries(username);
Object.entries(username).forEach(([key, value]) => console.log(key, value))