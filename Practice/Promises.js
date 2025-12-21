function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded...")
        }, 2000)
    })
}

function newPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network error...")
        }, 1000)
    })
}

promise()
.then((val) => {
    console.log(val)
}).then(newPromise).catch((a) => {
    console.log("value is : ", a);
})