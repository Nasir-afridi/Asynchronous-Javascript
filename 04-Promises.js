function checkingInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory...");
      resolve();
    }, 2000);
  });
  return promise;
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Creating the Order...");
    const err = new Error("Order is not created...");
    callback(err);
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Charging the Payment...");
    const error = null;
    const chargedAmount = 100;
    callback(error, chargedAmount);
  }, 1500);
}

function sendInvoice(callback) {
  setTimeout(() => {
    console.log("Sending the invoice...");
    if (callback) callback();
  }, 3000);
}

function main() {
  checkingInventory();
}

main();
