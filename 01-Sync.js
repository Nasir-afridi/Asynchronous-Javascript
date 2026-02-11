/* 
 Synchronous : 
 This is the normal way code runs in JavaScript.
 Each line waits for the previous line to finish before running.
 Think of it like following steps one by one in order.
*/

// Order tracking example for Synchronous js.
function checkingInventory() {
  console.log("checking the inventory...");
}
function createOrder() {
  console.log("Creating the Order...");
}

function chargePayment() {
  console.log("Charging the Payment...");
}

function sendInvoice() {
  console.log("Sending the invoice...");
}

function main() {
  checkingInventory();
  createOrder();
  chargePayment();
  sendInvoice();
}
main();
