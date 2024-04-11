//***Important***
// async and await use to handle promises
//You can changes the order of setTimeOut in 10000 to 5000 all the value are print after 10000
// And you changes the order to reverse in then 4000 to 6000 then 4000 is print first then 6000 after that it a concept of async await in javascript

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promises Resolved Value!!");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 is Resolved Value");
  }, 5000);
});

// Await  can only be the use inside async function
// Awaiting time this function is suspendend
async function handlePromises() {
  // JS Engine was waiting for promise to resolved
  const val = await p;
  console.log("Namaste sabhi");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste sabhi2");
  console.log(val2);
}
handlePromises();

// function getData() {
//   // JS Engine not be wait for any one
//   p.then((res) => console.log(res));
//   console.log("Namaste sabhi");
// }
// getData();

// Async Always returns a promises
// async function getData() {
//   return p;
// }

// const dataPromises = getData();
// // console.log(dataPromises);

// dataPromises.then((res) => console.log(res));
