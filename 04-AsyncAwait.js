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
    //   resolve();
    reject(new Error("Error catched..."));
    }, 1000);
  });
  return promise;
}

async function main() {
    setTimeout(() => {
        console.log("Other request processing...")
    }, 3000);

    // hrr function ko chk krna ho to try catch alag alag lagana hoga
  try {
    await checkInventory();
    await createOrder();
    await chargePayment();
    await sendInvoice();
    } catch(err) {console.log("err", err)}
}

main(); 