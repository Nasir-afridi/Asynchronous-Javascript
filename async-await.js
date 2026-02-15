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

/*
=====================================================
ASYNC / AWAIT — DETAILED THEORY (JavaScript)
=====================================================

1. WHAT IS ASYNC / AWAIT?
------------------------
Async/Await JavaScript ka modern syntax hai jo
Promises ke upar build kiya gaya hai.

Async/Await ka purpose:
- Asynchronous code ko synchronous jaisa readable banana
- Callback aur .then() chaining ki complexity ko kam karna

IMPORTANT:
Async/Await koi nayi cheez nahi hai,
yeh Promises ka hi cleaner syntax hai.

----------------------------------------
2. ASYNC KEYWORD
----------------------------------------
- async keyword function ke sath lagaya jata hai
- async function hamesha Promise return karta hai

Example:
async function example() {
  return 10;
}

Actual return:
Promise.resolve(10)

----------------------------------------
3. AWAIT KEYWORD
----------------------------------------
- await sirf async function ke andar use hota hai
- await Promise ke resolve hone ka wait karta hai
- Jab tak Promise resolve/reject na ho,
  async function temporarily pause ho jati hai

Example:
const result = await somePromise;

----------------------------------------
4. BASIC SYNTAX
----------------------------------------
async function processOrder() {
  await checkInventory();
  await createOrder();
  await chargePayment();
  await sendInvoice();
}

----------------------------------------
5. ERROR HANDLING (TRY / CATCH)
----------------------------------------
Async/Await mein error handling try/catch se hoti hai

Example:
async function processOrder() {
  try {
    await checkInventory();
    await createOrder();
  } catch (error) {
    console.log("Error:", error);
  }
}

- Agar koi Promise reject ho jaye,
  control seedha catch block mein chala jata hai

----------------------------------------
6. NON-BLOCKING BEHAVIOR
----------------------------------------
Async/Await synchronous jaisa dikhta hai,
lekin JavaScript ko block nahi karta.

Example:
setTimeout(() => {
  console.log("Other request processing...");
}, 3000);

await someAsyncTask();

- JS event loop baqi code ko run karta rehta hai

----------------------------------------
7. RETURN VALUE FROM ASYNC FUNCTION
----------------------------------------
Async function se return ki gayi value
automatically Promise resolve ban jati hai

Example:
async function getAmount() {
  return 300;
}

getAmount().then(amount => console.log(amount));

----------------------------------------
8. SEQUENTIAL VS PARALLEL EXECUTION
----------------------------------------

Sequential (one by one):
await task1();
await task2();

Parallel (together):
const p1 = task1();
const p2 = task2();
await p1;
await p2;

----------------------------------------
9. COMMON MISTAKES
----------------------------------------
1) await ko non-Promise value par use karna
2) async keyword bhool jana
3) Promise ko resolve/reject na karna
4) try/catch na lagana

----------------------------------------
10. ASYNC/AWAIT VS .THEN()
----------------------------------------

.then() chaining:
checkInventory()
  .then(createOrder)
  .then(chargePayment)
  .catch(err => console.log(err));

Async/Await:
try {
  await checkInventory();
  await createOrder();
  await chargePayment();
} catch(err) {
  console.log(err);
}

Async/Await zyada readable aur maintainable hota hai

----------------------------------------
11. INTERVIEW ONE-LINERS
----------------------------------------
- Async/Await is syntactic sugar over Promises
- async function always returns a Promise
- await pauses execution until Promise settles
- Errors are handled using try/catch

=====================================================
END OF ASYNC / AWAIT THEORY
=====================================================
*/
