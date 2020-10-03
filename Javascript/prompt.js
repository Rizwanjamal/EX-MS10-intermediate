
// Favourite dish 
var question = "What's your favourite dish ?";
var defaultAnswer = "Biryani";
var dish = prompt(question, defaultAnswer);

// Asking gender & then showing welcome message accordingly
var gender = prompt('Enter Your Gender ? \n F for Female \n M for Male', 'M');
var name = prompt('Enter Your Name ?');

if (gender == 'M') {
  // ye kaam kardo
  alert('Welcome Mr: '+ name);
}
else if (gender == 'F') {
  // ye kaam kardo
  alert('Welcome Ms: '+ name);
}
else {
  // warna ye kardo
  alert('Hye Hye '+ name);
}


