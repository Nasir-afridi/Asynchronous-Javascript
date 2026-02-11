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
