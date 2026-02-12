function checkingInventory(callback) {
  setTimeout(() => {
    console.log("checking the inventory...");
    callback();
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Creating the Order...");
    callback();
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Charging the Payment...");
    callback();
  }, 1500);
}

function sendInvoice(callback) {
  setTimeout(() => {
    console.log("Sending the invoice...");
    if (callback) callback();
  }, 3000);
}

function main() {
  checkingInventory(() => {
    createOrder(() => {
      chargePayment(() => {
        sendInvoice();
      });
    });
  });
}

main();
