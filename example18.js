// Make a range of numbers as an array

// [1, 2, 3, 4, 5]

var range = Array.from({ length: 10 }, (value, index) => index + 1);
console.log(range);