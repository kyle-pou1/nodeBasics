var crypto = require('crypto-js');

var secretMessage = {
  name: 'Buttercup',
  secretName: 'Jason Butters'
};

var secretKey = '123youandme';

//encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encrypted Message: ',encryptedMessage );
//decryptMessage
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message:',decryptedMessage);
console.log(decryptedMessage.secretName)
