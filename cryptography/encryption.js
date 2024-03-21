const {createCipheriv, randomBytes, createDecipheriv} = require('crypto');

const message = 'i like chainsaw man!';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// Encryptions
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted Message: ${encryptedMessage}`);


// Decryption of the cipher
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8');
console.log(`Decrypted Message: ${decryptedMessage.toString('utf8')}`);
