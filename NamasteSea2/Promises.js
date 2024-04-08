// Basic of Promisess

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

// // const promise = createOrder(cart);

// // {data: orderDetails}

// createOrder(cart)
//   .then(function (orderId) {
//     return proccedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
//   });

// Concept of Promises for Go Deep..

const cart = ["shoes", "pant", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proccedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happen, I will definietely be called.");
  });

// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // vaildateCart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "1234  orderId is here and its ordered";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

// Payment to procced in logic

function proccedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull");
  });
}

function validateCart(cart) {
  return true;
}
