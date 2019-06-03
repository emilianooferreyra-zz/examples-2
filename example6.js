// Prevent object properties from being added/deleted
var user = {
  name: 'john',
  email: 'john@gmail.com'
};

Object.getOwnPropertyDescriptors(user);
Object.seal(user);
Object.isSealed(user);