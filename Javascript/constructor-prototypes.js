// Constructor Function 
function Student (firstname, lastname, id) {
  //     var this = {};
      this.firstname = firstname;
      this.lastname = lastname;
      this.id = id;
  //     return this;
  }

// Prototype Methods
Student.prototypes.fullName = function() {
  return this.firstname + " " + this.lastname
}

var student1 = new Student("Rizwan", "Jamal", "124");
var student2 = new Student("Noman", "Aslam", "124");

student1.fullName() // Rizwan Jamal
student2.fullName() // Noman Aslam
