"use strict"
//Mortgage Calculator
function init(){
    const loanAmount=document.getElementById("loanAmount")
    const mortgageInterest=document.getElementById("mortgageInterest")
    const loanTerm=document.getElementById("loanTerm")
    const calculateMortgage=document.getElementById("calculateMortgage")
    const answerField=document.getElementById("answerField")
    function calculateMortgagePayment(){
        const principal=Number(loanAmount.value)
        const mInterest=Number(mortgageInterest.value)
        const loanterm=Number(loanTerm.value *12)
        const calculatedInterest=Number(mInterest/100/12)
        answerField.value = number1 + number2;
        const percentage=Number(calculatedInterest)
        const percentagePlusOne=Number(calculatedInterest+1)
        const exponentiationOperator=Number(percentagePlusOne**loanterm)
        const firstDividend=percentage*exponentiationOperator
        const secondDividend=exponentiationOperator-1
        const division=firstDividend/secondDividend
        const mortgage=principal
        const quotas=mortgage*division
        //results
        mortgageFinalResult.textContent=successMessage+quotas.toFixed(2)
        mortgageFinalResult.classList.add('success-message')
        calculateBtn.classList.add('form-success')
        calculateBtn.setAttribute('disabled', 'disabled')
        resetBtn.style.display = 'block'
    }
    calculateMortgage.onclick = calculateMortgage;
    
}
window.onload = init;