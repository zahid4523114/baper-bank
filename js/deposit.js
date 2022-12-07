// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // console.log(newDepositAmount);

  const previousDepositTotal = getTextElementValueById("deposit-total");
  // console.log(previousDepositTotal);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  //console.log(newDepositTotal);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
