const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

// Array to store user data
const users = [];

function signup(email, password) {
  const salt = randomBytes(16).toString('hex');
  const hashedPassword = scryptSync(password, salt, 64).toString('hex');

  const user = { email, password: `${salt}:${hashedPassword}` };
  
  // Push user to the array
  users.push(user);
  
  // Optionally, you might return something here if needed
  return 'Signup successful';
}

function login(email, password) {
  const user = users.find(v => v.email === email);

  if (!user) {
    return 'User not found';
  }

  const [salt, key] = user.password.split(':');
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, 'hex');
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    return 'Login success';
  } else {
    return 'Login failed';
  }
}
