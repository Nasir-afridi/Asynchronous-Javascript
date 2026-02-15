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
      let inStock = true;
      resolve(inStock);
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
  await checkingInventory();
  let inStock = await createOrder();
  console.log("Instock", inStock);
  await chargePayment();
  await sendInvoice();
}

main();
