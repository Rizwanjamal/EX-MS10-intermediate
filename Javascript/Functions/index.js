// Program 1
// student names function that will print all students names
function printStudentNames(students) {
  // Manual Printing 

  // console.log('studentName 1:', studentsNames[0]);
  // console.log('studentName 2:', studentsNames[1]);
  // console.log('studentName 3:', studentsNames[2]);
  // console.log('studentName 4:', studentsNames[3]);

  // Using Loop
 for(var i = students.length; i >= 1; --i) {
   console.log('studentName ' + i + ': ' + students[i-1])
 }
}
var students = ["Abdullah", "Salman", "Rizwan", "Faizan"];
// printStudentNames(students) //Uncomment to Run that function

// ======================================================

// Program 2
// Table
// 5 x 1 = 5
function printTable(number) {
  var i = 10;
  for(i; i >= 1; i-= 2) {
    console.log(number + " x " + i + " = " + number*i)
  }
} 

function getUserInputForTableProgram() {
  var userInput = prompt("Enter Any Number ?", 2);
  printTable(userInput);
}

// getUserInputForTableProgram(); //Uncomment to Run that function




