/* 
 Asynchronous = tasks can happen at different times, order is not guaranteed. 
 Here things work differently. Tasks don't block each other.
 Some tasks might take time (like fetching data or waiting for a timer),
 so other code can run while we wait.
*/

// Async code example.
function checkingInventory() {
  setTimeout(() => {
    console.log("checking the inventory...");
  }, 2000);
}
function createOrder() {
  setTimeout(() => {
    console.log("Creating the Order...");
  }, 1000);
}

function chargePayment() {
  setTimeout(() => {
    console.log("Charging the Payment...");
  }, 1500);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("Sending the invoice...");
  }, 3000);
}

function main() {
  checkingInventory();
  createOrder();
  chargePayment();
  sendInvoice();
}
main();
