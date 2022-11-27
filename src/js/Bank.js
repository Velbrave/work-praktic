export class Bank {
  balance = 0;
  historyTransaction = [];

  deposit(value) {
    this.balance += +value; 
    const transaction = {
      type: 'deposit',
      value: value,
      balance: this.balance,
    }
    this.historyTransaction.push(transaction);
  }

  withdraw(value) {
      this.balance -= +value; 
    const transaction = {
      type: 'withdraw',
      value: value,
      balance: this.balance,
    }
    this.historyTransaction.push(transaction);
  }
}