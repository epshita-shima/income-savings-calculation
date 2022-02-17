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