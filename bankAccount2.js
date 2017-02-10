var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  var matchedAccount;
  accounts.forEach(function(account){
    if (account.username === username) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

function deposit(account, amount) {
  account.balance += amount;
}

function withdraw(account, amount) {
  account.balance -= amount;
}

function getBalance(account){
  return account.balance;
}

var kylesAccount = createAccount({
  username: 'kyle',
  balance: 0
})
deposit(kylesAccount, 100000);
withdraw(kylesAccount, 2234);
console.log(getBalance(kylesAccount));

var existingAccount = getAccount('kyle');
console.log(getBalance(kylesAccount));

var jensAccount = createAccount({
  username: 'Jen',
  balance: 12
})

console.log(accounts);

var existingJensAccount = getAccount('Jen');
console.log(existingJensAccount);
