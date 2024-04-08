// const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

// Define a function that takes a callback as an argument
function doSomethingAsync(callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function () {
    // After some time, call the callback function with a result
    var result = "Data fetched successfully";
    callback(result);
  }, 2000); // Simulate a delay of 2 seconds
}

// Define a callback function
function handleResult(result) {
  console.log("Result:", result);
}

// Call the function and pass the callback function as an argument
doSomethingAsync(handleResult);

//Some Pratice

function doSomeThingForCall(callback) {
  setTimeout(function () {
    var result = "Data is succesfull after 5 sec";
    callback(result);
  }, 3000);
}

function handleResult(result) {
  console.log("result", result);
}

doSomeThingForCall(handleResult);

function OuterFunct(callback) {
  setTimeout(function () {
    var resultOfCallBack = "This is successFull after 4 min";
    callback(resultOfCallBack);
  }, 4000);
}
function handleResultOfCallbac(resultOfCallBack) {
  console.log("This is result", resultOfCallBack);
}
OuterFunct(handleResultOfCallbac);
