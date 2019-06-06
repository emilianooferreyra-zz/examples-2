// Check if string contains substring

const URL = 'https://api.github.com/users/wesbos';

// const containsWord = URL.includes('user');
// const containsWord = URL.indexOf('github') > -1;
// const containsWord = URL.startsWith('https');
const containsWord = URL.endsWith('wesbos');


console.log(containsWord);