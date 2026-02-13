function checkingInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory...");
      reject(new Error("Failed To load...")); // agrr error ko handle nahe kraingy to application crash krjayga. isliye reject hoty he osko handle krna zroori hai.
    }, 2000);
  });
  return promise;
}

function createOrder() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating the Order...");
      reject(new Error("Failed To create order..."));
    }, 1000);
  });
  return promise;
}

function chargePayment() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Charging the Payment...");
      reject(new Error("Failed To charge payment..."));
    }, 1500);
  });
  return promise;
}

function sendInvoice() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sending the invoice...");
      reject(new Error("Failed To send invoice..."));
    }, 3000);
  });
  return promise;
}

function main() {
  /* 
    .then isliye lagta hai takay function aik he sequence mein aatay jain orr aggr hr function ka alag alag error daikhne hai to hr hr function prr alag alag catch lagana hoga aik he catch lagaya
    to first one error show hoga hamesha osky bad walay nahe isliye
    alag alag catch lagana sahe hai
*/

  checkingInventory()
    .catch((err) => {
      console.log("error is : ", err);
    })
    .then(createOrder)
    .catch((err) => {
      console.log("error is : ", err);
    })
    .then(chargePayment)
    .catch((err) => {
      console.log("error is : ", err);
    })
    .then(sendInvoice)
    .catch((err) => {
      console.log("error is : ", err);
    });
}

main();
