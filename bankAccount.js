var account = {
  balance: 0
};

function deposit(account, amount) {
  account.balance += amount;
}

function withdraw(account, amount) {
  account.balance -= amount;
}

function getBalance(account){
  return account.balance;
}

deposit(account, 22045400);
withdraw(account, 6000);
deposit(account, 3525);
withdraw(account, 36000)
console.log(getBalance(account));
