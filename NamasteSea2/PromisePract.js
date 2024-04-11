const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Sucess "), 1000);
  //   setTimeout(() => reject("P1 fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 success"), 2000);
  setTimeout(() => reject("P2 fail"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 is reject"), 4000);
});

// {all }promises are excuted at that all the promises is complete then it is show in console then what's a result

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// {allSettled} it will wait for settled of promiese then is excute in console. It reject or resolve in promises it save way to write a code with this allsettled. Then it result is object with { key : value} pair

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Important note settled//
//   ***SETTLED***
// resolve-> reject || success-> failure || fulfilled-> rejected ***/

// {Race} First settled promises is it resolve or reject it will excuate

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// {Any} First resolve or success or fullfilled is settled then it excute and other of code it error does not excute in console
//***Important***//
// In case all the error and failed it called {Aggregate error}

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });
