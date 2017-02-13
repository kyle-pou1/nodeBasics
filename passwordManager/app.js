console.log('starting password manager');

var crypto = require('crypto-js');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
    .command('create', 'Create new account', function(yargs){
      yargs.options({
          name: {
              demand: 'true',
              alias: 'n',
              description: 'Account name (eg: Twitter, Facebook)',
              type: 'string'
          },
          username: {
            demand: 'true',
            alias: 'u',
            description: 'Username or Email',
            type: 'string'
          },
          password: {
            demand: 'true',
            alias: 'p',
            description: 'Account Password',
            type: 'string'
          },
          masterPassword: {
            demand: 'true',
            alias: 'm',
            description: 'Master password',
            type: 'string'
          }
      }).help('help');
    })
    .command('get', 'Get existing account', function(yargs){
      yargs.options({
        name: {
          demand: 'true',
          alias: 'n',
          description: 'Account name (eg: Twitter, Facebook)',
          type: 'string'
        },
        masterPassword: {
          demand: 'true',
          alias: 'm',
          description: 'Master password',
          type: 'string',
        }
      }).help('help');
    })
    .help('help')
    .argv;
  var command = argv._[0];

function getAccounts(masterPassword){
  //use getItemSync to fetch accounts
  var encryptedAccounts = storage.getItemSync('accounts');
  var accounts = [];

  //decrypt object              //1st argument is what you want to decrypt 2nd argument is secret key
  if (typeof enctryptedAccount !== 'undefined'){
    var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
    var accounst = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
  return accounts ;
}
function saveAccounts(accounts, masterPassword) {
  //encrypt accounts
   var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
   //setItemSync
   storage.setItemSync('accounts', encryptedAccounts.toString());

   return accounts;
}

function createAccount(account, masterPassword) {
  var accounts = getAccounts(masterPassword);

  accounts.push(account);

  saveAccounts(accounts, masterPassword);

  return account;
}

function getAccount(accountName, masterPassword) {
  // var accounts = storage.getItemSync('accounts');
  var accounts = getAccounts(masterPassword);
  var matchedAccount;
  accounts.forEach(function(account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

if (command === 'create'){
  try {
      var createdAccount = createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
      }, argv.masterPassword);
      console.log('Account Created!');
      console.log(createdAccount);
    }catch (e) {
      console.log('Unable to create account.');
    }
}else if(command === 'get') {
  try {
      var fetchedAccount = getAccount(argv.name, argv.masterPassword);

      if (typeof fetchedAccount === 'undefined') {
        console.log('Account not found');
      }else {
        console.log('Account found!');
        console.log(fetchedAccount);
      }
  }catch (e) {
      console.log('Unable to fetch account');
  }
}








// createAccount({
//   name: 'Facebook',
//   username: 'email@gmail.com',
//   password: 'password1234'
// });

// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);



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
