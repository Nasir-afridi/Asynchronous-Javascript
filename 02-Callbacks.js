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
      chargePayment((err, chargeAmoun) => {
        if(err) {
            console.log("handling the error")
            return;
        }
        console.log("charged : ", chargeAmoun);
        sendInvoice();
      });
    });
  });
}

main();
