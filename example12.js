// Shallow copy / clone an array
var fruits = ['apple', 'banana'];
// var newFruits = fruits.slice(0);
// var newFruits = [].concat(fruits);
var newFruits = [...fruits, 'cherry']
// newFruits.push('cherry');

console.log(newFruits);