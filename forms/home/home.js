   function homeLoanPayment15(p, r) {
   return (p*(r*((1+r)**180))/(((1+r)**180)-1))
 }
    function homeLoanPayment30(p, r) {
   return (p*(r*((1+r)**360))/(((1+r)**360)-1))
 }
 
 
 
 
btn15.onclick=function homeLoanPayment15() {
  let principleValue = inptPrinciple.value
  let monthlyInterest = inptMonthlyInterest.value
  let homePayment =  homeLoanPayment15(Number(principleValue),Number(monthlyInterest))
  lblResult.hidden = false
  lblResult.textContent = ("A home loan for $ " + principleValue + " over " + totalMonths + " years at " + monthlyInterest +
  " would have a monthly payment of " + carPayment)
}

  





btn30.onclick=function homeLoanPayment30(){
  let principleValue = inptPrinciple.value
  let monthlyInterest = inptMonthlyInterest.value
  let homePayment =  homeLoanPayment30(Number(principleValue),Number(monthlyInterest))
  lblResult.hidden = false
  lblResult.textContent = ("A home loan for $ " + principleValue + " over " + totalMonths + " years at " + monthlyInterest +
  " would have a monthly payment of " + carPayment)
}




 