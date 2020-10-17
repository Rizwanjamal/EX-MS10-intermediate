// Example-1
var total = 10;

function doSum() {
  var total = 15;
  console.log("total inside 1:", total);
  total = 20;
  console.log("total inside 2:", total);
}

console.log("total outside 1:", total);

doSum();
console.log("total outside after calling function :", total);

// Example-2
var a = "123";
function abc() {
  var a = "324";
  console.log(a);
}
console.log(a); // 123

// Example-3
var a = "123";
function abc() {
  var a = "324";
  console.log(a);
}
console.log(a); //123
abc(); //234

// Example-4
function abc() {
  var a = "324";
  console.log(a);
}
console.log(a); //Error
abc(); // 324
console.log(a); //324

// Example-5
function abc() {
  a = "324"; // Global variable
  console.log(a);
}
console.log(a); //Error
abc(); // 324
console.log(a); //324