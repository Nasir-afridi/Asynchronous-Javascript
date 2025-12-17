function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory ...");
      // resolve();
      reject(new Error("failed to check the inventory.."))
    }, 2000);
  });
  return promise;
}

function createOrder() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("creating the order ...");
      resolve();
    }, 1000);
  });
  return promise;
}

function chargePayment() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("charging the payment...");
      // resolve();
      reject(new Error("failed to chargePayment.."))
    }, 2000);
  });
  return promise;
}

function sendInvoice() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sending the invoice...");
      resolve();
    }, 1000);
  });
  return promise;
}

function main() {
  checkInventory()
    .catch((err) => {
      console.log("err", err)
    })
    .then(createOrder)
     .catch((err) => {
      console.log("err", err)
    })
    .then(chargePayment)
     .catch((err) => {
      console.log("err", err)
    })
    .then(sendInvoice)
     .catch((err) => {
      console.log("err", err)
    });
}

main();
