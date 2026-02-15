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
      reject(new Error("error is undefined"));
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

async function main() {
  try {
    await checkingInventory();
    await createOrder();
    await chargePayment();
    await sendInvoice();
  } catch (err) {
    console.log("error", err);
  }
}

main();
