let account; // Store the created account here

// Get elements
const outputMessage = document.getElementById('outputMessage');
const checkBalanceButton = document.getElementById('checkBalance');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const accountName = document.getElementById('accountName');
const initialBalance = document.getElementById('initialBalance');
const setupAccount = document.getElementById('setupAccount');

// Ensure event listeners are added only once
setupAccount.addEventListener('click', function createAccount() {
    if (accountName.value === "" || initialBalance.value <= 0) {
        outputMessage.innerHTML = "Please provide valid account details.";
        return;
    }
    // Create account only once
    if (!account) {
        account = new BankAccount(accountName.value, parseFloat(initialBalance.value));
    }
});

// Check Balance
checkBalanceButton.addEventListener('click', checkBalance);
depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

function checkBalance() {
    if (account) {
        outputMessage.innerHTML = `Current Balance: $${account.getBalance()}`;
    } else {
        outputMessage.innerHTML = "Please set up an account first.";
    }
}

function deposit() {
    if (!account) {
        outputMessage.innerHTML = "Please set up an account first.";
        return;
    }

    // Prevent prompt() from being called twice
    const depositAmount = promptForAmount("Enter Amount To Deposit: ");
    if (depositAmount === null) return; // User pressed Cancel
    account.deposit(depositAmount);
}

function withdraw() {
    if (!account) {
        outputMessage.innerHTML = "Please set up an account first.";
        return;
    }

    // Prevent prompt() from being called twice
    const withdrawAmount = promptForAmount("Enter Amount To Withdraw: ");
    if (withdrawAmount === null) return; // User pressed Cancel
    account.withdraw(withdrawAmount);
}

function promptForAmount(message) {
    const amount = parseFloat(prompt(message));
    if (isNaN(amount) || amount <= 0) {
        outputMessage.innerHTML = `Amount must be greater than zero.`;
        return null; // Return null if invalid input
    }
    return amount;
}

// BankAccount class with private fields
class BankAccount {
    #accountNumber;
    #balance;
    #transactionHistory;

    constructor(a_h_name, initial_balance) {
        if (initial_balance < 0) {
            outputMessage.innerHTML = "Initial Balance Cannot Be Negative.";
            return;
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
        this.#logTransaction(`Deposit: $${deposit_amount}`);
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
        this.#logTransaction(`Withdraw Successful of Amount: $${withdraw_amount}`);
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
        outputMessage.innerHTML = `Transaction Log for ${this.accountHolderName}: ${message}. Current balance: $${this.#balance}`;
    }
}
