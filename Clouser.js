//Basic concept in coluser

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste sabhi");
// }
// x();

// Intermediate Level

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }

//   console.log("Namaste Sabhi");
// }
// x();

// Clouser Some Advance concept

// function outest() {
//   var c = 20;
//   function outer(b, s) {
//     function inner() {
//       console.log(a, b, c, s);
//     }
//     // let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var close = outest()("hellow World", "Javascript");
// close();

// counter app use coluser

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();
