
// document.getElementById("btn-case-minus").addEventListener("click", function(){
// const caseNumbersFiled = document.getElementById("case-number-field");
// const caseNumbersString = caseNumbersFiled.value;
// const previousCaseNumber = parseInt(caseNumbersString);
// const newCaseNumber = previousCaseNumber + 1;
// caseNumbersFiled.value = newCaseNumber;

// });


function updateCaseNumber(isIncrease){
  const caseNumbersFiled = document.getElementById("case-number-field");
  const caseNumbersString = caseNumbersFiled.value;
  const previousCaseNumber = parseInt(caseNumbersString);
  let newCaseNumber;
  if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber - 1
  }
  caseNumbersFiled.value = newCaseNumber;

  return newCaseNumber;
};

function updateCaseTotalPrice(newCaseNumber){
  const caseTotalPrice = newCaseNumber * 59;
  const casTotalElement = document.getElementById('case-total');
  casTotalElement.innerText = caseTotalPrice;

}

document.getElementById("btn-case-plus").addEventListener("click", function(){
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
 
 
  });

  document.getElementById("btn-case-minus").addEventListener("click", function(){
   const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
  });

