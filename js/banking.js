function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);
    //clear the input value
    inputField.value = '';
    return amountValue;
}

function updateTotalField(amount, totalFieldId) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(balanceTotal.innerText);
    return previousTotalBalance;
}

function updateBalance(amount, isAdd) {
    //Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(balanceTotal.innerText);
    if (isAdd == true) {
        balanceTotal.innerText = previousTotalBalance + amount;
    }
    else {
        balanceTotal.innerText = previousTotalBalance - amount;
    }
}


document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField(depositeAmount, 'deposite-total');
        //Update Account Balance
        updateBalance(depositeAmount, true);
    }

    // //Update Account Balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousTotalBalance = parseFloat(balanceTotal.innerText);
    // const newTotalBalance = previousTotalBalance + depositeAmount;
    // balanceTotal.innerText = newTotalBalance;

});

//handle withdrow event handler
document.getElementById('withdrow-button').addEventListener('click', function () {

    const withdrowAmount = getInputValue('withdrow-input');
    const currentBalance = getCurrentBalance();
    if (withdrowAmount > 0 && withdrowAmount < currentBalance) {
        updateTotalField(withdrowAmount, 'withdrow-total');
        updateBalance(withdrowAmount, false);
    }
    if (withdrowAmount > currentBalance) {
        console.log('You can not withdrow more than what you have in your money');
    }


    // //decrease total balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // balanceTotal.innerText = previousBalanceTotal - withdrowAmount;
});