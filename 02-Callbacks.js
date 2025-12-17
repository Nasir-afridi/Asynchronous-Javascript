function checkInventory(callback) {
  setTimeout(() => {
    console.log("checking the inventory ...");
    callback();
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("creating the order ...");
    const error = new Error("order creation failed...");
    callback(error);
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("charging the payment...");
    const err = null;
    const chargeAmoun = 300;
    callback(err, chargeAmoun);
  }, 2000);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("sending the invoice...");
  }, 1000);
}

function main() {
  checkInventory(() => {
    createOrder((error) => {
      if (error) {
        console.log(error);
      }
      chargePayment((err, chargeAmoun) => {
        if (err) {
          console.log("handling the error");
          return;
        }
        console.log("charged : ", chargeAmoun);
        sendInvoice();
      });
    });
  });
}

main();

/*
========================================
CALLBACK FUNCTIONS — DETAILED THEORY
========================================

Callback function aik aisi function hoti hai jo
kisi doosri function ko argument ke taur par di jati hai,
aur baad mein (usually async operation ke complete hone par)
call ki jati hai.

JavaScript mein callbacks ka use zyada tar
ASYNC operations ke liye hota hai, jaise:
- setTimeout / setInterval
- API calls
- File handling
- Database queries
- Payment / order processing flows

----------------------------------------
WHY CALLBACKS ARE NEEDED?
----------------------------------------
JavaScript single-threaded language hai,
matlab aik time par aik hi kaam hota hai.

Lekin real-world mein:
- data load hone mein time lagta hai
- payment process slow hota hai
- server response delay hota hai

Agar JS wait kare, to poori app freeze ho jayegi.
Is problem ko solve karne ke liye callbacks use hote hain.

Callback JS ko batata hai:
"Is kaam ke complete hone ke baad yeh function chala dena"

----------------------------------------
ERROR-FIRST CALLBACK PATTERN
----------------------------------------
Industry standard (especially Node.js) mein
callback ka yeh format hota hai:

callback(error, data)

Rules:
1) Agar error aaye → pehla argument error hoga
2) Agar error na ho → error = null
3) Successful data hamesha second argument mein hota hai

Example:
callback(null, result)

Ya agar error ho:
callback(error)

Is pattern ka faida:
- error handling clean hoti hai
- flow predictable hota hai
- large applications mein debugging easy hoti hai

----------------------------------------
REAL-WORLD FLOW EXAMPLE
----------------------------------------
checkInventory → createOrder → chargePayment → sendInvoice

Har step async hai aur next step
sirf tab chalega jab previous complete ho jaye.

Callback ensure karta hai ke:
- order tab banay jab inventory confirm ho
- payment tab charge ho jab order ban jaye
- invoice tab send ho jab payment successful ho

----------------------------------------
CALLBACK HELL (PROBLEM)
----------------------------------------
Zyada nested callbacks likhne se code:
- hard to read ho jata hai
- maintain karna mushkil hota hai

Is problem ko CALLBACK HELL kehte hain.

Isi liye later:
- Promises
- async/await
use kiye jate hain.

----------------------------------------
SUMMARY
----------------------------------------
✔ Callback async flow handle karta hai
✔ Error-first pattern industry standard hai
✔ Data callback ke through return hota hai
✔ Callbacks JS async learning ki foundation hain

========================================
*/
