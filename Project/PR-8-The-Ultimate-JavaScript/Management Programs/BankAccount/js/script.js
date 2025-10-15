// The BankAccount class, how are private fields like 
// #accountNumber, #balance, and #transactionHistory implemented, and
// why does attempting to directly modify #balance result in an error?

class BankAccount {
    #accountNumber;
    #balance;
    #transactionHistory;

    constructor(a_h_name,initial_balance) {
        
        if (initial_balance < 0) {
            outputMessage.innerHTML = "Initial Balance Cannot Be Negative.";
            
        }
        this.#balance = initial_balance;
        this.accountHolderName = a_h_name;
        this.#accountNumber = Math.floor(Math.random() * 1000000);
        this.#logTransaction(`Account Created Successfully`);
    }
    deposit(deposit_amount) {
        if (deposit_amount <= 0) {
            outputMessage.innerHTML = "Deposit Amount Can't Be Less Than Or Equal To 0";
            return;
        }
        this.#balance += deposit_amount;
        this.#logTransaction(`Deposit: ${deposit_amount}`);
    }

    withdraw(withdraw_amount) {
        if (withdraw_amount <= 0) {
            outputMessage.innerHTML = "Withdraw Amount Can't Be Less Than Or Equal To 0";
            return;
        }

        if (this.#balance < withdraw_amount) {
            outputMessage.innerHTML = "Insufficient Balance...";
            return;
        }

        this.#balance -= withdraw_amount;
        this.#logTransaction(`Withdraw Successful of Amount: ${deposit_amount}`);
    }

    getBalance() {
        return this.#balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getAccountHolderName() {
        return this.accountHolderName;
    }

    #logTransaction(message) {
        outputMessage.innerHTML = `Transaction Log for ${this.accountHolderName}: ${message}. Current balance: ${this.#balance}`;
    }
};

const accountName = document.getElementById('accountName');
const initialBalance = document.getElementById('initialBalance');

const setupAccount = document.getElementById('setupAccount');
setupAccount.addEventListener('click',function createAccount() {
    const account = new BankAccount(accountName.value,initialBalance.value);
})

 

const checkBalance = document.getElementById('checkBalance');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const viewHistory = document.getElementById('viewHistory');

checkBalance.addEventListener('click',);

function checkBalance() {
    outputMessage.innerHTML = `Current Balance : ${account.getBalance()}`;
}
// depositBtn.addEventListener('click',);
function deposit() {
    let d_amount = parseInt(prompt("Enter Amount To Deposit :- "))
    account.deposit(d_amount);
}

// withdrawBtn.addEventListener('click',);
function withdraw() {
    let w_amount = parseInt(prompt("Enter Amount To Withdraw :- "))
    account.withdraw(w_amount);
}