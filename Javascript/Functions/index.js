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
