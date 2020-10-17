var studentDetail  = {
  name: 'Rizwan',
  id: '001210',
  fatherName: 'Jamal'
};

// Accessing Object Property

//1st Method
studentDetail['name']           // Rizwan
studentDetail['id']             // 001210
studentDetail['fatherName']     // Jamal

//2nd Method
studentDetail.name           // Rizwan
studentDetail.id             // 001210
studentDetail.fatherName     // Jamal


// Here the notice is that object assigning based on reference
// Means it will not put the value into student2 variable, it will assign 
// student1 reference (address) into student2.
student1 = {name : "rizwan"};
student2 = student1 

// So chaning student2 is indirectly changing student1 object properties.
student2.name = "salman"

// Here you can see modifying student2 is also modifying student1
student1.name // "salman"
