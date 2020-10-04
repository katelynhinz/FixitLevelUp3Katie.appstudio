   function carLoanPayment(p, r, n) {
   return (p*(r*((1+r)**n))/(((1+r)**n)-1))
  }
  

  btnCalcCar.onclick=function carLoanPayment() {
  let principleValue = inptPrinciple.value
  let monthlyInterest = inptMonthlyInterest.value
  let totalMonths = inptTotalMonths.value
  let carPayment =  carLoanPayment(Number(principleValue),Number(monthlyInterest),Number(totalMonths))
  lblResult.hidden = false
  lblResult.textContent = ("A car loan for $ " + principleValue + " over " + totalMonths + " months at " + monthlyInterest +
  " would have a monthly payment of " + carPayment)
}



/*
     A home loan for $200,000 over 30 years at 5.7% interest would have a monthly payment of $1160.80.

     A car loan for $30,000 over 60 months at 3.2% interest would have a monthly payment of $542.00
*/