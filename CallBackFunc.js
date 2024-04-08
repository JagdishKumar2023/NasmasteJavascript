// Call back easy examples

// setTimeout(function () {
//   console.log("This function is called after 3 sec");
// }, 3000);

// setTimeout(function () {
//   console.log("This call after 2 sec");
// }, 2000);

// setTimeout(function () {
//   console.log("This function run after 3 second");
// }, 3000);

// setTimeout(function () {
//   console.log("This is called by 30 sec");
// }, 0);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// function attachEventListeners() {
//   let count = 0;
// }
// attachEventListeners();

// Callback Intermediate level examples

// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count);
//   });
// }

// attachEventListeners();

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("Butn", ++count);
// });
