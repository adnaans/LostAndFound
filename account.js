
var config = {
  apiKey: "AIzaSyDa2Jw2AY8rKjEOHjC3zpSr5o6uxOzKbI0",
  authDomain: "lost-and-found-e04ad.firebaseapp.com",
  databaseURL: "https://lost-and-found-e04ad.firebaseio.com",
  storageBucket: "lost-and-found-e04ad.appspot.com",
  messagingSenderId: "404142438505"
};
firebase.initializeApp(config);

function login(){
  var email = document.getElementById('log_email').value;
  var password =document.getElementById('log_password').value;
  var success = false;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Error: Incorrect Password");
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      console.log("success");
      window.location.href = "home.html";
    }
    else{
    }});
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
    firebase.auth().onAuthStateChanged(function(user) {
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
            window.location.href = "home.html";
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
}
  function checkupdate(user){
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("  FName: "+profile.fname);
        console.log("  LName: "+profile.lname);
      });
    }
  }
  function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return (uuid);
  }

  function addItem(){
    var itemname = document.getElementById('itemname').value;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var uuid=generateUUID();
          console.log("success creating user");
            var updates = {};
            var postData = {
              name : itemname
            };
            var uid = user.uid;
            console.log(uid);
            updates['/Users/'+uid + '/items/'+uuid] = postData;
            firebase.database().ref().update(updates).then(function(){
            console.log("updates pushed");
            window.location.href = "home.html";
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
  }
  function updateTable(){
    console.log("here");
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        var uid = user.uid;
        var firebasenode = firebase.database().ref('/Users/' + uid + '/items');
        firebasenode.once('value', function(snapshot) {
          console.log(snapshot);
          if(snapshot!="{}"){
            console.log("hejee");
            var i = 1;
            var userDict = {};
            snapshot.forEach(function(snap){
                $('#item_table').append('<tr id="item'+(i)+'"></tr>');
                var time;
                var loc;
                if(snap.numChildren()==1){
                  time="No one has scanned the QR code";
                  loc="No one has scanned the QR code";
                  console.log(time);
                  console.log(loc);
                }
                else{
                  //time=snap.child("time");
                  //loc=snap.child("loc");
                }

                console.log(snap.val().name);

                $('#item'+i).html("<td align = 'center'><p>"+snap.val().name+"<td align = 'center'><img src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=found.html?uid="+snap.key+"' alt = '...'></img></td><td><p>"+loc+"</p></td><td><p>"+time+"</p></td>");
                i++;
              }
            );
          }
        });
      }});
    }
