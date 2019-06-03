// Find certain element / index of array
var people = ['John', 'Mary', 'Joe', 'John'];

var result = people.findIndex(person => person === 'Mary');
console.log(result);

function findIndexAll(arr, value) {
  let indices = [];
//   arr.forEach((el, i) => {
//     if(el === value) {
//       indices.push(i);
//     }
//   });
  arr.forEach((el, i) => (el === value) && indices.push(i));

  return indices;
};

var res = findIndexAll(people, 'Joe');
console.log(res);