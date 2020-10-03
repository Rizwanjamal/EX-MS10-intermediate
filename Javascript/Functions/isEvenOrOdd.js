function isEvenOrOdd() {
  var number = prompt("Enter Number ?", 2);
  if (number % 2 == 0) {
    alert(number + ' is an Even number');
  } else {
    alert(number + ' is an Odd number');
  }
}