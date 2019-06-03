// Merge multiple objects into one object
var defaultUser = {
  name: '',
  email: '',
  subscribed: true
};

var actualUser = {
  name: 'Don',
  email: 'don@gmail.com',
  phone: '555-525-5252'
};


// var userData = Object.assign(defaultUser, actualUser);
var userData = { ...defaultUser, ...actualUser };
console.log(userData);