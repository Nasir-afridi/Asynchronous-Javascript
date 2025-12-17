function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory ...");
      resolve();
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
      resolve();
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
  checkInventory().then(createOrder).then(chargePayment).then(sendInvoice);
}

main();
