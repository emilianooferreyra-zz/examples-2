// Delete or filter a property from an object
var name = {
  first: 'John',
  middle: 'Bob',
  last: 'Doe'
};

// delete name.first;
// console.log(name);

function filteredObj(obj, prop) {
  var filteredObj = {};

  Object
    .keys(obj )
    .filter(k => k !== prop)
    .map(key => filteredObj[key] = name[key]);

  return filteredObj;
};

console.log(filteredObj(name, 'last'));