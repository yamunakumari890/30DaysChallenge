let expenses = [];

function loadExpenses() {

    let savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
    }

    displayExpenses();
    calculateTotal();
}


function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if (name === "" || amount === "") {
        alert("Please enter expense name and amount");
        return;
    }

    let expense = {
        name: name,
        amount: Number(amount)
    };

    expenses.push(expense);

    saveExpenses();
    displayExpenses();
    calculateTotal();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


function displayExpenses() {

    let expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

    expenses.forEach(function(expense, index) {

        expenseList.innerHTML += `
            <div class="expense">

                <span class="expense-name">
                    ${expense.name}
                </span>

                <span class="expense-amount">
                    ₹${expense.amount}
                </span>

                <button
                    class="delete-btn"
                    onclick="deleteExpense(${index})">
                    ❌
                </button>

            </div>
        `;

    });
}


function calculateTotal() {

    let total = expenses.reduce(function(sum, expense) {

        return sum + expense.amount;

    }, 0);

    document.getElementById("total").innerText =
        "Total Expense: ₹" + total;
}



function deleteExpense(index) {

    expenses.splice(index, 1);

    saveExpenses();
    displayExpenses();
    calculateTotal();
}


function saveExpenses() {

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}


loadExpenses();