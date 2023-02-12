/*
1. add event listener with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amout
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field
*/ 



//  step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const widthdrawField = document.getElementById('user-widthdraw');
    const newWithdrawAmountString = widthdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step-3
    const widthdrawTotalElement = document.getElementById('withdraw-total');
    const newWithdrawTotalString = widthdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(newWithdrawTotalString);
    
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    widthdrawTotalElement.innerText = currentWithdrawTotal;
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7
    widthdrawField.value = '';
})