var isStudent = true;
var isStudent = false;

// Convert any value to equalent boolean values (truthy/falsy)

!!true  //true
!!false //true
!!''    //false
!!'a'   //true
!!2     //true
!!0     //false
!!undefined     //false
!!null     //false

// Conditional statement based on truty/falsy value

var name = 'Rizwan';
if (!name) {
    console.log("name nahi hai")    
} else {
    console.log("name hai")    
}