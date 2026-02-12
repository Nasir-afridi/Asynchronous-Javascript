function checkingInventory(callback) {
  setTimeout(() => {
    console.log("checking the inventory...");
    callback();
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("Creating the Order...");
    const err = new Error("Order is not created...");
    callback(err);
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("Charging the Payment...");
    const error = null;
    const chargedAmount = 100;
    callback(error, chargedAmount);
  }, 1500);
}

function sendInvoice(callback) {
  setTimeout(() => {
    console.log("Sending the invoice...");
    if (callback) callback();
  }, 3000);
}

function main() {
  // Callback Hell.
  checkingInventory(() => {
    createOrder((err) => {
      if (err) {
        console.log(err);
      }
      chargePayment((error, chargedAmount) => {
        if (error) {
          console.log("handling the error");
          return;
        }
        console.log("charged : ", chargedAmount);
        sendInvoice();
      });
    });
  });
}

main();

/*
========================================
CALLBACK FUNCTIONS — SIMPLE GUIDE
========================================

WHAT IS A CALLBACK?
A callback is a function passed into another
function as an argument, which is executed later
after a task is completed.

In simple words:
"Run this function after this work is done."

----------------------------------------
WHY CALLBACKS ARE NEEDED?
----------------------------------------
JavaScript is single-threaded, meaning it can
do only one task at a time.

Real applications have slow tasks like:
- Server requests
- Database operations
- Payments
- Timers (setTimeout)

If JS waited for each task to finish,
the app would freeze.

Callbacks allow JS to continue working and
run a function later when the task finishes.

----------------------------------------
ERROR-FIRST CALLBACK PATTERN
----------------------------------------
Standard Node.js style:

callback(error, data)

Rules:
1) If error happens → first argument = error
2) If no error → error = null
3) Success data goes in second argument

Examples:

Success:
callback(null, result)

Error:
callback(error)

Benefits:
- Clean error handling
- Predictable flow
- Easier debugging

----------------------------------------
REAL-WORLD FLOW EXAMPLE
----------------------------------------
checkInventory → createOrder
→ chargePayment → sendInvoice

Each step is async.
Next step runs only after previous completes.

This ensures:
- Order after inventory check
- Payment after order creation
- Invoice after payment success

----------------------------------------
CALLBACK HELL (PROBLEM)
----------------------------------------
Too many nested callbacks make code:
- Hard to read
- Hard to maintain
- Messy

This is called "Callback Hell".

To solve this, developers use:
 Promises
 async/await

----------------------------------------
SUMMARY
----------------------------------------
 Callbacks manage async flow
 Error-first pattern is standard
 Data returns through callbacks
 Foundation of async JavaScript.
========================================
*/
