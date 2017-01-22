var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

console.log('running server!');

var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDwvscYM2Mq55JOuF3REg2oK5P4vpdmCGk",
  authDomain: "health-me-299b8.firebaseapp.com",
  databaseURL: "https://health-me-299b8.firebaseio.com",
  storageBucket: "health-me-299b8.appspot.com",
  messagingSenderId: "11212122726"
};

firebase.initializeApp(config);

var database = firebase.database();

function createDoctor(email, pass, fname, lname,
  profilelink, address, hospital, descrip){
    var uservar;
    var fullname = fname + " " + lname;
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        uservar = user;
        console.log("success creating user");
        checkupdate(user);
        user.updateProfile({
          "displayName" : fullname,
          "photoURL" : profilelink
        }).then(function() {
          console.log("update success");
          var updates = {};
          var postData = {
            fname: fname,
            lname: lname,
            email: email,
            profile_picture : profilelink,
            address: address,
            hospital: hospital,
            pod: "Doctor",
            desc: descrip,
            uid: user.uid,
          };
          updates['/UserInfo/Doctors/' + fullname.replace(/\s/g, '')] = postData;
          firebase.database().ref().update(updates).then(function(){
          console.log("updates pushed");
        });
          //checkupdate(user);
          //checkupdate(uservar);
          //console.log("done wid dis");
          //loginandcheck(user,email,pass);
        });
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
function createPatient(email, pass, fname, lname,
  profilelink, address, hospital, doct, age, weight){
    var uservar;
    var fullname = fname + " " + lname;
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        uservar = user;
        console.log("success creating user");
        checkupdate(user);
        user.updateProfile({
          "displayName" : fullname,
          "photoURL" : profilelink
        }).then(function() {
          console.log("update success");
          var updates = {};
          var postData = {
            fname: fname,
            lname: lname,
            email: email,
            profile_picture : profilelink,
            address: address,
            hospital: hospital,
            pod: "Patient",
            doctor: doct,
            age: age,
            weight: weight,
            uid: user.uid,
          };
          updates['/UserInfo/Patients/' + fullname] = postData;
          console.log('/Relation/' + doct.replace(/\s/g, '') + '/' + fullname);
          updates['/Relation/' + doct.replace(/\s/g, '') + '/' + fname+lname] = {messages:"{}", datapoints:"{}", diagnosis:"{}"};
          firebase.database().ref().update(updates).then(function(){
          console.log("updates pushed");
        });
        });

      } else {
        console.log("failure");
      }
    });
    firebase.auth().on
}
var docemail= "trollfinaldoc@gmail.com";
var docpass = "shouldbeperfectdoc";
var docfname = "MyName";
var doclname = "Jeff";
var docprofilelink = "not necessary atm";
var docaddress = "10 Cloverfield Lane, Gotham City, Narnia";
var dochospital = "Mental Asylum";
var docdescription = "I have a PhD in whoopin";

var patemail= "trollfinalpatient@gmail.com";
var patpass = "shouldbeperfectpat";
var patfname = "LeBrawn";
var patlname = "Jaymes";
var patprofilelink = "troll face";
var pataddress = "your mom's house";
var pathospital = "Arkham Asylum";
var patdoc = "MyName Jeff";
var patage =  21;
var patweight = "123 kg";

function checkupdate(user){
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: "+profile.providerId);
      console.log("  Provider-specific UID: "+profile.uid);
      console.log("  Name: "+profile.displayName);
      console.log("  Email: "+profile.email);
      console.log("  Photo URL: "+profile.photoURL);
    });
  }
}

createDoctor(docemail, docpass, docfname, doclname, docprofilelink,docaddress, dochospital, docdescription);
createPatient(patemail, patpass, patfname, patlname,
  patprofilelink, pataddress, pathospital, patdoc, patage, patweight)
/*
  function loginandcheck(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    checkupdate(user);
    user.updateProfile({
      displayName: "fsldjdlskfjds",
      photoURL: "sfljdklsfjkljds"
    }).then(function(){
      console.log("it did shit");
    });
  } else {
    console.log("not changed");
  }
});
}
console.log("its heer");
loginandcheck(docemail,docpass);
*/
