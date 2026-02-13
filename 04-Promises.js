function checkingInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory...");
      // agrr error ko handle nahe kraingy to application crash krjayga. isliye reject hoty he osko handle krna zroori hai.
      reject(new Error("Failed To load..."));
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

function chargePayment() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Charging the Payment...");
      resolve();
    }, 1500);
  });
  return promise;
}

function sendInvoice() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sending the invoice...");
      resolve();
    }, 3000);
  });
  return promise;
}

function main() {
  checkingInventory().then(createOrder).then(chargePayment).then(sendInvoice);
}

main();
