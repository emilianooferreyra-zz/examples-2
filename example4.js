// Check if a property exists in object

var user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'NYC'
  }
};

// var property = 'city' in user.address;
var property = user.hasOwnProperty('address')
console.log(property);