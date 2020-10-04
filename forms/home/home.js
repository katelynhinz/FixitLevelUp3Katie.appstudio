
btn15.onclick=function(){
  
}

btn30.onclick=function(){
  
}


   function homeLoanPayment(p, r) {
   return (p*(r*((1+r)**n))/(((1+r)**n)-1))
  }
  

  btnCalcCar.onclick=function carLoanpayment() {
  let principleValue = inptPrinciple.value
  let monthlyInterest = inptMonthlyInterest.value
  let totalMonths = inptTotalMonths.value
  let carPayment =  carLoanPayment(Number(principleValue),Number(monthlyInterest),Number(totalMonths))
  lblResult.hidden = false
  lblResult.textContent = ("A car loan for $ " + principleValue + " over " + totalMonths + " years at " + monthlyInterest +
  " would have a monthly payment of " + carPayment)
}
