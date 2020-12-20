let currentUser;

firebaseAuth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        console.log('user :', user)
        firebaseDB.collection('users').doc(user.uid).get()
            .then((doc) => {
                console.log('data :', doc)
                currentUser = doc.data();
                console.log('user Data :', currentUser)
                document.getElementById('userName').innerHTML = currentUser.name 
            })
            .catch((error) => {
                console.error('error :', error)
            })
    } else {
        console.log('No user logged in')
        // No user is signed in.
    }
});

let logout = () => {
}

const addTask = e => {
    
    firebaseDB.collection('users').doc(currentUser.uid).update({
        tasks: [{}]
    })
};  