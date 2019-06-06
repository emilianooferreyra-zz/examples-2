// Use IIFEs or block scope (w/ let / const) to hide / expose data

var getUserData = (() => {
  let name = 'John';
  let email = 'john@gmail.com';
  let password = 'alsdfjaskdf';

  let sayHi = () => {
    return `Hi, ${name}!`
  }
 
  return { name, email }
})();

{
  let name = 'John';
  let email = 'john@gmail.com';
  let password = 'alsdfjaskdf';

  var result = {
    name, email
  }
}

result;
result.sayHi();
"Hi, John!"
