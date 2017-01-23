
var config = {
  apiKey: "AIzaSyDa2Jw2AY8rKjEOHjC3zpSr5o6uxOzKbI0",
  authDomain: "lost-and-found-e04ad.firebaseapp.com",
  databaseURL: "https://lost-and-found-e04ad.firebaseio.com",
  storageBucket: "lost-and-found-e04ad.appspot.com",
  messagingSenderId: "404142438505"
};

firebase.initializeApp(config);
function getLocation() {
  navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
  //The working next statement.
  navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      finalLocation = {latitude: lat, longitude: lng};

  }, function (e) {
      alert("Please try again!")
  }, {
      enableHighAccuracy: true
  });
}



function login(){
  var email = document.getElementById('log_email').value;
  var password =document.getElementById('log_password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  });
  console.log("success");
  window.location = "www.miteshmalaviya.com/LF/userPortal.html"
}
function register(){
  var email = document.getElementById('reg_email').value;
  var username = document.getElementById('reg_username').value;
  var fname = document.getElementById('reg_fname').value;
  var lname = document.getElementById('reg_lname').value;
  var pass = document.getElementById('reg_password').value;
  var confirmpass = document.getElementById('reg_confirm_password').value;
  if(pass==confirmpass){
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    });
    console.log("success");
    window.location = "www.miteshmalaviya.com/LF/userPortal.html"
    firebase.auth().onAuthStateChanged(function(user) {
      userg=user;
        if (user) {
          uservar = user;
          console.log("success creating user");
            var updates = {};
            var postData = {
              fname: fname,
              lname: lname,
              username: username,
              email: email,
              items: "{}"
            };
            var uid = user.uid;
            console.log(uid);
            updates['/Users/'+uid] = postData;
            firebase.database().ref().update(updates).then(function(){
            console.log("updates pushed");
          });
            //checkupdate(user);
            //checkupdate(uservar);
            //console.log("done wid dis");
            //loginandcheck(user,email,pass);
          // console.log("First Name: " + fname);
          // console.log("Last Name: " + lname);
          // console.log("Full Name: " + fullname);
          // console.log("Address: " + address);
          // console.log("Hospital: " + hospital);
        } else {
          console.log("failure");
        }
      });
      firebase.auth().on
  }
  else{
    alert("Error: Passwords do not match.");
  }
  function checkupdate(user){
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("  FName: "+profile.fname);
      console.log("  LName: "+profile.lname);
    });
  }
}
}

var user = firebase.auth().currentUser;

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

function addStore(){
  var user = firebase.auth().currentUser;
  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('Users');
  var newStoreRef = storesRef.push();
  var name = document.getElementById('ObjectName').value
  var uid = user.uid;
  console.log(name);
  var objectUUID = generateUUID();
  var updates = {};
  var postData = {
    objectName: name,
    objectID: objectUUID,
    userID: uuid
  };
  console.log(uid);
  updates['/Users/'+ uid + '/items' + objectUUID] = postData;
  firebase.database().ref().update(updates).then(function(){
  console.log("updates pushed");
});
}
