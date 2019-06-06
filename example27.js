// Measure time it takes function to run
var getUserData = async (user) => await fetch(`https://api.github.com/users/${user}`);

var time = (fn, ...args) => {
  console.log('time');
  let result = fn(...args);
  console.timeEnd('time')
  return result;
};

time(() => getUserData('wesbos'));