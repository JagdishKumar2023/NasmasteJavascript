const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P1 Sucess"), 2000);
  setTimeout(() => reject("P1 Fail"), 4000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Sucess"), 1000);
  setTimeout(() => reject("P2 Fail"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 Sucess"), 2000);
  setTimeout(() => reject("P2 Fail"), 3000);
});

// Promise All

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// allSettled Promise

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Race of Promise

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Any use you can fullfield any one sucess then it will resolve

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
