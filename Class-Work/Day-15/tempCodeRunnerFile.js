let promises = new Promises((resolve,reject) => {
    let status = true;
    if (status) {
        resolve("Promise FullFilled");
    } else {
        reject("Promise Rejected");
    }
});

promises
.then((result) => {
    console.log(result);
       
}).catch((err) => {
    console.log(err);
});