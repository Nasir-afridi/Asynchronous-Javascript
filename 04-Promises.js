function checkingInventory() {
  const promise = new Promise(() => {
    setTimeout(() => {
      console.log("checking the inventory...");
    }, 2000);
    return promise;
  });
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
  checkingInventory(() => {
    createOrder((err) => {
      if (err) {
        console.log(err);
      }
      chargePayment((error, chargedAmount) => {
        if (error) {
          console.log("handling the error");
          return;
        }
        console.log("charged : ", chargedAmount);
        sendInvoice();
      });
    });
  });
}

main();
