const {createCipheriv, randomBytes, createDecipheriv} = require('crypto');

const message = 'i like chainsaw man!';
const key = randomBytes(32);
const iv = randomBytes(16);
