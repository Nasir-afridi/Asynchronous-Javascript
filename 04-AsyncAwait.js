function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory ...");
      let inStock = 9
      resolve(inStock);
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

async function main() {
    setTimeout(() => {
        console.log("Other request processing...")
    }, 3000)
   let a = await checkInventory();
   console.log(a);
    await createOrder();
    await chargePayment();
    await sendInvoice();
}

main(); 