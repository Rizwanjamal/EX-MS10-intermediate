var signin = (event) => {
  console.log('getting login !')
  event.preventDefault()
  var email = document.getElementById("exampleInputEmail1").value
  var password = document.getElementById("exampleInputPassword1").value
  if (!password || !email) {
      alert("Please submit all the fields !")
  }

  firebaseAuth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    window.location = './screens/dashboard/dashboard.html'
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


