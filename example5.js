// Prevent object properties from being added
var user = {
  name: 'jeff',
  email: 'jeff@gmail.com'
}

Object.getOwnPropertyDescriptors(user);
Object.preventExtensions(user);
Object.isExtensible(user);