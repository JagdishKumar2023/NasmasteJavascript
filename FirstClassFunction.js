// a();
// b(); // Here a concept of hosting in this function beacuse your are using var to delecera .

// Function statement

// function a() {
//   console.log("function statement");
// }

// // Function Expression

// var b = function () {
//   console.log("Function Expression");
// };

// Anonymous Function

// function () {
//     console.log("hi");
// }

//First class function

var b = function (param1) {
  return function xyz() {};
};

console.log(b());
