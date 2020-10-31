
// Here we are default calling promise first & then assign the resultant output 
// to a variable

var student = new Promise(function (resolve, reject) {
  var isStudentExist = true;
  if (isStudentExist) {
      resolve("Rizwan")
  } else {
      reject("Salman")
  }
})

// ----------------------------------------------------------------

// Here we are making function that will call promise on calling
var studentData = function () {
  return new Promise(function (resolve, reject) {
    var isStudentExist = true;
    if (isStudentExist) {
        resolve("Rizwan") // We are resolving the promise
    } else {
        reject("Salman")
    }
  })
}

// Sunccess or fulfilled example/case
studentData().then(function(data) {
  console.log(data) // Data will be seen on console
})

// ----------------------------------------------------------------
var studentData = function () {
  return new Promise(function (resolve, reject) {
    var isStudentExist = false;
    if (isStudentExist) {
        resolve("Rizwan")
    } else {
        reject("Salman") // We are rejecting the promise
    }
  })
}

// reject or failure example/case
studentData().then(function(data) {
  console.log(data)
}).catch(function(error) {
  console.log(error) // Error will be seen on console
})


// ------------------------------------------------------------------
// Nested Promise/Promise Chaining Example

// Success Case
var roomClean = function () {
  return new Promise(function (resolve, reject) {
      resolve("Successfully cleaned the room");
  })
}

var arrangements = function (message) {
  return new Promise(function (resolve, reject) {
      resolve(message + "\n Arrangements Done !")
  })
}

roomClean()
    .then(function (roomStatus) {
        return arrangements(roomStatus)
    })
    .then(function (arrangementsStatus) {
        console.log(arrangementsStatus);
        console.log("Let's Start Seminar");
    })

// Error/Failure Case
var roomClean = function () {
  return new Promise(function (resolve, reject) {
      reject("Room didn't clean");
  })
}

var arrangements = function (message) {
  return new Promise(function (resolve, reject) {
      resolve(message + "\n Arrangements Done !")
  })
}

roomClean()
    .then(function (roomStatus) {
        return arrangements(roomStatus)
    })
    .then(function (arrangementsStatus) {
        console.log(arrangementsStatus);
        console.log("Let's Start Seminar");
    })
    .catch(function (error){
        console.log(error)
    })
