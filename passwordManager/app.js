console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

function createAccount(account) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }
  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName) {
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;
  accounts.forEach(function(account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

// createAccount({
//   name: 'Facebook',
//   username: 'email@gmail.com',
//   password: 'password1234'
// });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);







// // storage.setItemSync('accounts', [{
// //   username: 'Kyle',
// //   balance: 0
// // // }]);
//
//
//
// var accounts = storage.getItemSync('accounts');
//
// // accounts.push({
// //   username: 'Jerry',
// //   balance: 20
// // });
// //
// // storage.setItemSync('accounts', accounts);
// console.log(accounts);
