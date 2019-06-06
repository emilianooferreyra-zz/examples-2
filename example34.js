// Get random integer in range

// 2, 10 -> 5
const result = Math.round(Math.random() * (10 - 2) + 2); // inclusive of min and max
console.log(result);

const result2 = Math.floor(Math.random() * (10 - 2) + 2); // inclusive of min
console.log(result2);

const result3 = Math.ceil(Math.random() * (10 - 2) + 2); // inclusive of max
console.log(result3);

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

getRandomInt(2, 15);
