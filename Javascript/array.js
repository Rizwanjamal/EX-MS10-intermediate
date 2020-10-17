var studentNames = ["Sajid Iqbal", "Arsalan Ahmed", "Saqib Ahmed", "Saqib Iqbal","Saqib Ahmed" ];

//Array Index always starts from 0
// Accessing Array
studentNames[0] // "Sajid Iqbal"

// Accessing Array Length
studentNames.length // 5


// --------------------------------------------------------------------

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

  // We can more shorten the statement as well !
  return name == 'Saqib Ahmed';
})

console.log('filteredStudents :', filteredStudents)

//-----------------------------------------------------------------------

var hotpot = ['roti1', 'roti2', 'roti3']
hotpot.push('roti4') 
hotpot // ["roti1", "roti2", "roti3", "roti4"]

hotpot.pop() // ["roti4"] Removed Element
// ["roti1", "roti2", "roti3", "roti4"] updated Array

hotpot.shift()
// ["roti2", "roti3", "roti4"] updated Array

hotpot.unshift("roti1")
// ["roti1", "roti2", "roti3", "roti4"] updated Array

// Adding element in between of Array
hotpot.splice(1, 0, "saada roti")

// Remooving Saada roti & storing it into variable
var saadaRoti = hotpot.splice(1, 1)

// Adding that Saada roti at specific position
hotpot.splice(2, 0, saadaRoti.join())

//-----------------------------------------------------------------------

// Array Of Objects

var students = [
  {}, {}, {}, {}
];

// Let's asign properties to each object
var students = [
  {
      id: '12',
      name: 'Rizwan',
      fatherName: 'Jamal'
  }, {
      id: '13',
      name: 'Salman',
      fatherName: 'Jamal'
  }, {
      id: '14',
      name: 'Najam',
      fatherName: 'Sheraz'
  }, {
      id: '15',
      name: 'Abdullah',
      fatherName: 'Ahad'
  }
];

//Accessing object placed at 0 index
students[0]
// Output will be
// {
//   id: '12',
//   name: 'Rizwan',
//   fatherName: 'Jamal'
// },

// ForEach this time on Array of Objects
students.forEach(function (studentDetail, index) {
  var currentIndex = index+1
  console.log('student '+ currentIndex + " name is :" + studentDetail.name)
});
// Output will be
// student 1 name is :Rizwan
// student 2 name is :Salman
// student 3 name is :Najam

// Using Map For Modifying Array Elements
var newStudentsArray = students.map(function (studentDetail) {
  var fullName = studentDetail.name + " " + studentDetail.fatherName;
  studentDetail.fullName = fullName;
  return studentDetail;
});

// Concat
a = [1,2,3]
b = [4,5,6]
a.concat(b) // [1,2,3,4,5,6]

// isArray
Array.isArray('') // false
Array.isArray([]) // true
Array.isArray({}) // false

// Question: why do we need to use isArray if we can get the type value using typeof()
// Answer: typeof([]) will also gives you an object. That's the reason you should use isArray for checking Array

// From
Array.from("salman") // ['s','a','l','m','a','n']

// It also provides you a callback function
Array.from("salman", function (char) {
  console.log("char :", char)
})

// Reverse
Array.from('madam').reverse() // ["m", "a", "d", "a", "m"]

Array.from('madam jee').reverse() // ["e", "e", "j", " ", "m", "a", "d", "a", "m"]

// includees & indexOF
// Remove duplicates from numbers Array
var numbers = [1,2,3,4,5,2,3,4,6,7,8,9,10];
var num = [];
// using includes
var nonDuplicatesNumbers = numbers.forEach(function (number) {
  if (!num.includes(number)) {
      num.push(number)
  }
});

// using indexOf
var nonDuplicatesNumbers = numbers.forEach(function (number) {
  if (num.indexOf(number) < 0) {
      num.push(number)
  }
});


