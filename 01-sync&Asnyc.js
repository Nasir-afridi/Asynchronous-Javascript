// This is the synchoronus execution bcz this code executes line by line.
function checkInven() {
    console.log("checking the inventory...")
}

function createOrder () {
    console.log("creating the order...")
}

function chargePayment () {
    console.log("Charging the Payment...")
}

function sendInvoice () {
    console.log("sending the Invoice...")
}

function main () {
    checkInven();
    createOrder();
    chargePayment();
    sendInvoice();
}

main()