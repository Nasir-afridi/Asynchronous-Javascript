function checkStock(foodItem) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (foodItem.stock > 0) res("In Stock");
      else {
        rej("Out of Stock");
      }
    }, 2000);
  });
}

function createOrder(foodItem) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (foodItem) res("Order Created");
    }, 1000);
  });
}

function processPayment(balance, amount) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (balance >= amount) res("Pay Done");
      else {
        rej("Not yet..");
      }
    }, 3000);
  });
}

function prepareFood(foodItem) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (foodItem) res("Food Prepared");
    }, 1000);
  });
}

function deliverFood(address) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (address === "") {
        rej("adress not found...");
      } else {
        res("Food Delivered");
      }
    }, 2000);
  });
}

async function orderFoodFlow(foodItem, balance, amount, address) {
  try {
    const va1 = await checkStock(foodItem);
    console.log("stock is : ", va1);

    const va2 = await createOrder(foodItem);
    console.log("Order is : ", va2);

    const va3 = await processPayment(balance, amount);
    console.log("Payment is : ", va3);

    const va4 = await prepareFood(foodItem);
    console.log("Food is : ", va4);

    const va5 = await deliverFood(address);
    console.log("deliverFood is : ", va5);
  } catch (err) {
    console.log("Error caught:", err);
  } finally {
    console.log("Flow finished / Cleanup if needed");
  }
}


const foodItem = { name: "Burger", stock: 1 };
const balance = 300;
const amount = 250; 
const address = "Street 45, Karachi";
orderFoodFlow(foodItem, balance, amount, address);
