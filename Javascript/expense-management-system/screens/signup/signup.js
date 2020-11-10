var signup = (event) => {
    event.preventDefault()
    var name = document.getElementById("exampleInputName1").value
    var email = document.getElementById("exampleInputEmail1").value
    var password = document.getElementById("exampleInputPassword1").value
    if (!name || !password || !email) {
        alert("Please submit all the fields !")
    }

    const userData = {
        name,
        email,
        password
    };

    var users = localStorage.getItem("allUsers")
    var parsedUsers = users && JSON.parse(users)
    
    parsedUsers && parsedUsers.push(userData)
    var dataToStore = parsedUsers ? parsedUsers : [userData]
    console.log('data to store :', dataToStore);
    localStorage.setItem("allUsers", JSON.stringify(dataToStore))
}


