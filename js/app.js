// delecere function for input property
function costInput(inputType) {
    return document.getElementById(inputType + '-input').value;
}
// call fuction to get input value and calculete total cost
function getCostValue() {
    const income = costInput('income');
    const foodCost = costInput('food');
    const rentCost = costInput('rent');
    const clothCost = costInput('cloth');
    if (isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
        window.alert('please give integer integer input')
    }
    else {
        if ((income < 0) || (foodCost < 0) || (rentCost < 0) || (clothCost < 0)) {
            window.alert('please give a valid input');
        }
        else {
            // calcutation of total expenses
            const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
            console.log(totalCost);
            // set total expense
            document.getElementById('total-expense').innerText = totalCost;
            return totalCost;
        }
    }
}
// calculate balance after cost
function calculateBalanceAfterCost() {
    const incomeInput = costInput('income');
    if (isNaN(incomeInput)) {
        window.alert('please give valid input');
    }
    else {
        if (incomeInput < getCostValue()) {
            window.alert('your cost is so high');
        }
        else {
            const mainBalance = parseFloat(incomeInput) - getCostValue();
            console.log(mainBalance);
            // set innerText in the balance
            document.getElementById('balance').innerText = mainBalance;
            return mainBalance;
        }
    }
}
// click calculation button for costing input and after balance
function getCalculationExpenses() {
    getCostValue();
    calculateBalanceAfterCost();
}
// calculate saving amount 
function calculateSavingAmount() {
    const incomeInput = costInput('income')
    const savingAmount = costInput('saving');
    const savingAmountText = parseFloat(savingAmount);
    const saveMoney = (savingAmountText / 100) * incomeInput;
    if (isNaN(savingAmount)) {
        window.alert('Please give valid input');
    }
    else {
        if (saveMoney > calculateBalanceAfterCost()) {
            window.alert('your balance not enough for saving');
        }
        else if (saveMoney < 0) {
            window.alert("please inter valid input");
        }
        else {
            document.getElementById('saving-money').innerText = saveMoney;
            return saveMoney;
        }
    }
}