// return last item of array
var arr1 = [5, 6, 7, 8];
arr1.pop();

function findLast(arr, fn) {
  return arr.filter(fn).pop();
}

var findLast = (arr, fn) => arr.filter(fn).pop();

arr1.map((el, i) => [el, i]);

var overFive = num => num > 5;

function findLastIndex(arr, fn) {
  return arr.map((el, i) => [el, i]).filter(([el, i]) => fn(el, i)).pop()[1];
}

var names = ['jim', 'jeff', 'bob'];
var containsJ = name => name.includes('j');
console.log(findLastIndex(names, containsJ))