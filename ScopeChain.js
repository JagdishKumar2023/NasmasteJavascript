// var b = 10; // Gobal scope in the variale is decleared
// function a() {
//   c();
//   function c() {}
// }

// console.log(b);
// a();

function b() {
  var k = kanishka; // Inside the block scope in var is delecared .
  d();
  function d() {}
}

console.log(k); // output = k  is not defined
b();
