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
  // agrr aik he baar error daikhna hai to osky liye aik he catch lagana pryga leken hrr function prr alag alag daikhna hai to hrr function prr alag alag lagana pryga.xs
  try {
    await checkingInventory();
  } catch (err) {
    console.log("error", err);
  }
  try {
    await createOrder();
  } catch (error) {
    console.log("error", error);
  }
  try {
    await chargePayment();
  } catch (error) {
    console.log("error", error);
  }
  try {
    await sendInvoice();
  } catch (error) {
    console.log("error", error);
  }
}
main();
