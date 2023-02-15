function getTextElementValeById(elementId){
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
};

function setTextElementValueById(elementId, value){
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function calculateSubTotal(){
const currentPhoneTotal = getTextElementValeById("phone-total");
const currentCaseTotal = getTextElementValeById("case-total");

const currentSubTotal = currentPhoneTotal + currentCaseTotal;
setTextElementValueById("subtotal", currentSubTotal);

// calculate tax
const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString);
setTextElementValueById("text-amount", taxAmount);

const finalAmount = currentSubTotal + taxAmount;
setTextElementValueById("fianl-total", finalAmount);
}