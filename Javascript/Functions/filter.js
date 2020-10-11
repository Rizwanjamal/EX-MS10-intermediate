var studentNames = ["Sajid Iqbal", "Arsalan Ahmed", "Saqib Ahmed", "Saqib Iqbal","Saqib Ahmed" ];

// studentNames.forEach()
// studentNames.filter()
// studentNames.find()


// Callback function
// 1. A function that's passed to another function as an argument
// 2. it's an anonymous function.


// ForEach 
studentNames.forEach(function (name, index) {
  var studentIndex = index+1
  console.log('studentName '+ studentIndex +" : "+ name);
})

// Filter
var filteredStudents = studentNames.filter(function (name, index) {
  // if (name == "Saqib Ahmed") {
  //   return true;
  // }

  // we can remove body braces if body content is single liner
  // if (name == 'Saqib Ahmed') return true;

  // We can shorten the statement as well !
  return name == 'Saqib Ahmed';
})

console.log('filteredStudents :', filteredStudents)