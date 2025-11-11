let promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    let status = true;
    if (status) {
      resolve("Promise FullFilled");
    } else {
      reject("Promise Rejected");
    }
  }, 2000);
  setTimeout(() => {
    let status = false;
    if (status) {
      resolve("Promise FullFilled");
    } else {
      reject("Promise Rejected");
    }
  }, 2000);
});

promises
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });