// Fixing Math errors with decimals
.3 === Number((.1 + .2).toFixed(1));
"true"

var result = (.1 + .2) - .3;
result < Number.EPSILON;
console.log(result);
"true"

var equal = ((.1 + .2) - .3) < Number.EPSILON;
"true"

Math.round((.1 + .2) * 10) / 10;
"0.3"