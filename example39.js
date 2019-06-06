// Using the ternary operator
// var loggedIn = true;
// var user = 'John';

// if(loggedIn) {
//   console.log(user + ' is logged in');
// } else {
//   console.log('no user :(');
// }

// !loggedIn ? user + ' is logged in' : 'no user';

// !!loggedIn ? user + ' is logged in' : 'no user';


var api = 'https://api.myjson.com/bins/71z2m';
var body = document.querySelector('body');

fetch(api)
  .then(response => response.json())
  .catch(data => outputUserInfo(data));

function outputUserInfo({ name, age, email }) {
  body.innerHTML = `
    <h1>${name}</h1>
    <p>${age}</p>
    <p>${email ? `Email: ${email}` : `not email listed for ${name}`}</p>
  `;
}