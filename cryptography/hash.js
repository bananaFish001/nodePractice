const {createHash} = require('crypto');

// create a string hash
function hash (input){
  return createHash('sha256').update(input).digest('hex'); // Secure hashing algorithm
}

// compare two hashed passwords
let password = 'hi mom!';
const hash1 = hash(password);
console.log(hash1);

// ... some time later 
const hash2 = hash(password);
const match = hash1 === hash2;
console.log(match ? 'good password' : 'password does not match');
