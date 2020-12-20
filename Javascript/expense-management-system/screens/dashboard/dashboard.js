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

let generateTableRows = () => {
    var tableData = currentUser.tasks.map(task => (
        `
            <tr>
                <td>${task.description}</td>
                <td>${task.priority}</td>
            </tr>
        `
      )).join('');
      
      var tbody = document.querySelector('#body');
      tbody.innerHTML = tableData;
} 



let logout = () => {
    firebaseAuth.signOut().then(function() {
        // Sign-out successful.
        window.location = '../../index.html'
      }).catch(function(error) {
        // An error happened.
        console.error('error :', error)
      });
      
}
let addTask = () => {
    window.location = "../task/task.html"
}