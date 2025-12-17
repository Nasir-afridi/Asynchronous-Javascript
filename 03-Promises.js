function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("checking the inventory ...");
      // resolve();
      reject(new Error("failed to check the inventory.."));
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
      reject(new Error("failed to chargePayment.."));
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
  // agrr hrr function kk liye error catch krna ho to osky neechay likhna pryga .catch ko
  checkInventory()
    .catch((err) => {
      console.log("err", err);
    })
    .then(createOrder)
    .catch((err) => {
      console.log("err", err);
    })
    .then(chargePayment)
    .catch((err) => {
      console.log("err", err);
    })
    .then(sendInvoice)
    .catch((err) => {
      console.log("err", err);
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

- Benefits: cleaner, readable code; single error handler
*/
