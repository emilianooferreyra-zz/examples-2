// Prevent object properties from being added, deleted or modified
var user = {
  name: 'Greg',
  email: 'greg@gmail.com'
};

Object.getOwnPropertyDescriptors(user);
Object.freeze(user);
Object.getOwnPropertyDescriptors(user);
Object.isFrozen(user);
