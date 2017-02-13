console.log('starting password manager');

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
        }
      }).help('help');
    })
    .help('help')
    .argv;
  var command = argv._[0];

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

if (command === 'create'){
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('Account Created!');
  console.log(createdAccount);
}else if(command === 'get') {
  var fetchedAccount = getAccount(argv.name);

  if (typeof fetchedAccount === 'undefined') {
    console.log('Account not found');
  }else {
    console.log('Account found!');
    console.log(fetchedAccount);
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
