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

/*
    =====================================================
    JAVASCRIPT PROMISES — DETAILED THEORY
    =====================================================

    1. WHAT IS A PROMISE?
    ---------------------
    - A Promise is a JavaScript object that represents the eventual
    completion (or failure) of an asynchronous operation and its resulting value.
    - Simple terms: A “wada” that either resolves with a value (success)
    or rejects with an error (failure).
    - Promises are the modern replacement for callback-based async code.

    2. PROMISE STATES
    -----------------
    A Promise always has one of three states:
    1) Pending   -> The async operation is not completed yet.
    2) Fulfilled -> Operation completed successfully; value is available.
    3) Rejected  -> Operation failed; error is available.
    - Once resolved or rejected, the state cannot change.

    3. CREATING A PROMISE
    ---------------------
    Syntax:
    const promise = new Promise((resolve, reject) => {
        // asynchronous task
        if(success) resolve(value);
        else reject(error);
    });

    - resolve(value) -> marks the promise as fulfilled
    - reject(error) -> marks the promise as rejected

    4. CONSUMING PROMISES
    ---------------------
    Using .then() and .catch():

    promise
    .then(data => console.log("Success:", data))
    .catch(err => console.log("Error:", err));

    - .then() handles fulfilled state
    - .catch() handles rejected state

    5. PROMISE CHAINING
    ------------------
    - Promises can be chained to avoid callback hell:
    checkInventory()
    .then(createOrder)
    .then(chargePayment)
    .then(sendInvoice)
    .catch(err => console.log("Error:", err));

*/
