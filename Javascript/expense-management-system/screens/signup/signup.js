const signup = (event) => {
    event.preventDefault()
    let name = document.getElementById("exampleInputName1").value
    let email = document.getElementById("exampleInputEmail1").value
    let password = document.getElementById("exampleInputPassword1").value
    if (!name || !password || !email) {
        alert("Please submit all the fields !")
    }

    // var users = localStorage.getItem("allUsers")
    // var parsedUsers = users && JSON.parse(users)
    
    // parsedUsers && parsedUsers.push(userData)
    // var dataToStore = parsedUsers ? parsedUsers : [userData]
    // console.log('data to store :', dataToStore);
    // localStorage.setItem("allUsers", JSON.stringify(dataToStore))


    firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then((doc) => {
            console.log('user :', doc)
            return firebaseDB.collection('users').doc(doc.user.uid).set({
                name,
                email,
                userId: doc.user.uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })

            // Signed in 
            // ...
        })
        .then(() => {
            console.log('Data created !')
            window.location = '../dashboard/dashboard.html'
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('error :', errorMessage);
            // ..
        });

}


