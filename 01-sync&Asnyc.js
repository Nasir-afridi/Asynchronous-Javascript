// Synchronous vs Asynchronous in JavaScript

// Synchronous Code
// This is the normal way code runs in JavaScript.
// Each line waits for the previous line to finish before running.
// Think of it like following steps one by one in order.

console.log("Synchronous example start");

console.log("Step 1: checking the inventory"); // runs first
console.log("Step 2: creating the order");    // runs second
console.log("Step 3: charging the payment");   // runs third
console.log("Step 4: sending the invoice");   // runs fourth

console.log("Synchronous example end");

// Output:
// Step 1: checking the inventory
// Step 2: creating the order
// Step 3: charging the payment
// Step 4: sending the invoice


// Asynchronous Code
// Here things work differently. Tasks don't block each other.
// Some tasks might take time (like fetching data or waiting for a timer),
// so other code can run while we wait.
console.log("Asynchronous example start");


function checkInventory() {
  setTimeout(() => {
    console.log("Step 1: checking the inventory (after 2s)");
  }, 2000);
}

function createOrder() {
  setTimeout(() => {
    console.log("Step 2: creating the order (after 1s)");
  }, 1000);
}

function chargePayment() {
  setTimeout(() => {
    console.log("Step 3: charging the payment (after 2s)");
  }, 2000);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("Step 4: sending the invoice (after 1s)");
  }, 1000);
}


// Call all tasks
checkInventory();
createOrder();
chargePayment();
sendInvoice();
console.log("Asynchronous example end");


// output:
// Step 2: creating the order (after 1s)
// Step 4: sending the invoice (after 1s)
// Step 1: checking the inventory (after 2s)
// Step 3: charging the payment (after 2s)

// Key takeaway:
// Synchronous = everything happens in order, one after the other
// Asynchronous = tasks can happen at different times, order is not guaranteed. 
