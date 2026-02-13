function checkingInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory...");
      resolve();
    }, 2000);
  });
  return promise;
}

function createOrder() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating the Order...");
      resolve();
    }, 1000);
  });
  return promise;
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
  checkingInventory().then(createOrder);
}

main();
