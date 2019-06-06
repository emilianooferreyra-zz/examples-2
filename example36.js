// Random decimal in range

// 2, 10 -> 6.23490813

Math.random() * (10 - 2) + 2;
"2.0165015880230293"

function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
};

getRandomDecimal(2, 20);
"14.024958870262425"