function checkInventory(callback) {
  setTimeout(() => {
    console.log("checking the inventory ...");
    callback()
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("creating the order ...");
    const error = new Error("order creation failed...")
    callback(error)
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("charging the payment...");
    callback()
  }, 2000);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("sending the invoice...");
  }, 1000);
}

function main() {
  checkInventory(() => {
    createOrder((error) => {
        if(error) {
            console.log(error)
        }
      chargePayment(() => {
        sendInvoice();
      });
    });
  });
}

main();
