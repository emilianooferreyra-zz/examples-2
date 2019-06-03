// Convert object in array

var person = { name: 'Amy', age: 40 };

var arr = [];

Object.keys(person).forEach(key => arr.push([key, person[key]]));
console.log(arr);

var result = Object.keys(person).map(key => [key, person[key]]);
console.log(result);
console.log(Object.entries(person));