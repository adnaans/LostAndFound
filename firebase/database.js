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
/*firebase.auth().signInWithEmailAndPassword("trollfinalpatient@gmail.com", "shouldbeperfectpat").catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// ...
});*/
// addMessage("http://i.imgur.com/mV6dWE4.png", "Rhonda Roberts", "I've been noticing that I am extremely stressed because of work and other things. Can someone help me?");
// addMessage("http://i.imgur.com/oX8kdyf.jpg", "John Jacobson", "My forehead has been stinging continuously. What do I do?");
// addMessage("http://i.imgur.com/85xUEMr.jpg", "Mohan Mihar", "I have taken many antidepressants but they aren't working...");
// addMessage("http://i.imgur.com/Pqj4uuv.png", "Julianne Einhart", "I hit my head against a pole yesterday and I have been feeling woozy lately...");
// addMessage("http://i.imgur.com/Pqj4uuv.png", "Julianne Einhart", "Can someone help me out?");
// addMessage("http://i.imgur.com/mV6dWE4.png", "Rhonda Roberts", "Now I am having trouble sleeping. I do not drink coffee or anything with caffeine. HELP!");
// addMessage("http://i.imgur.com/oX8kdyf.jpg", "John Jacobson", "Ok, so I drank a cup of coffee and now I'm really jittery. My mind cannot rest. Please help me!");
// addMessage("http://i.imgur.com/mV6dWE4.png", "Rhonda Roberts", "After a few reccomendations, I took a medication to help me sleep properly, but now I sleep too long, and cannot wake up when I need to.");
// addMessage("http://i.imgur.com/mV6dWE4.png", "Rhonda Roberts", "Any help on this sleeping issue is appreciated.");
// addMessage("http://i.imgur.com/85xUEMr.jpg", "Julianne Einhart", "Data in!");
addMessage("http://i.imgur.com/85xUEMr.jpg", "Mohan Mihar", "My left testicle's inflamed.");

// addData("MyName Jeff", "LeBrawn Jaymes", "idk", "x", "y", [[1,2],[3,4],[5,6]]);
// addImages("MyName Jeff", "LeBrawn Jaymes", ["img1","img2","img3"]);
//
function addMessage(img, name, msg){
  //firebase.auth().onAuthStateChanged(function(user) {
    //if (user) {
      var updates = {};
      var postData = {
        img : img,
        name : name,
        msg : msg
      };
      //var mdoc = doc.replace(/\s/g, '');
      //var mpat = pat.replace(/\s/g, '');
      var finalData;
      var currentmsgs={};
      //console.log('/Relation/' + mdoc + '/' + mpat + '/messages');
      var ref = database.ref('/Posts');

      // Attach an asynchronous callback to read the data at our posts reference
      //ref.once("value", function(snapshot) {
      //currentmsgs = snapshot.val();
      //console.log(currentmsgs);
      //if(currentmsgs!="{}"||currentmsgs===null){
        //console.log("dis");
        //ref.push(postData);
        //finalData = currentmsgs;
      //}
      //else{
        //console.log("here");
        //finalData = [];
        ref.push(postData);
    //  }
      //ref.set(finalData);
      console.log("done");
      //}, function (errorObject) {
        //console.log("The read failed: " + errorObject.code);
    //});
  //}
//});
}
// function addData(doc, pat, title, xaxis, yaxis, points){
//   //firebase.auth().onAuthStateChanged(function(user) {
//     //if (user) {
//       var updates = {};
//       var postData = {
//         title: title,
//         x_axis: xaxis,
//         y_axis: yaxis,
//         points: points
//       };
//       var mdoc = doc.replace(/\s/g, '');
//       var mpat = pat.replace(/\s/g, '');
//       var finalData;
//       var currentdata={};
//       console.log('/Relation/' + mdoc + '/' + mpat + '/datapoints');
//       var ref = database.ref('/Relation/' + mdoc + '/' + mpat + '/datapoints');
//
//       // Attach an asynchronous callback to read the data at our posts reference
//       ref.once("value", function(snapshot) {
//       currentdata = snapshot.val();
//       console.log(currentdata);
//       if(currentdata!="{}"||currentdata===null){
//         console.log("dis data");
//         currentdata.push(postData);
//         finalData = currentdata;
//       }
//       else{
//         console.log("here");
//         finalData = [];
//         finalData.push(postData);
//       }
//       ref.set(finalData);
//       console.log("done");
//       }, function (errorObject) {
//         console.log("The read failed: " + errorObject.code);
//     });
// //  }
// //}
// function addImages(doc, pat, images){
//   //firebase.auth().onAuthStateChanged(function(user) {
//   //  if (user) {
//       var updates = {};
//       var postData = {
//         images: images
//       };
//       var mdoc = doc.replace(/\s/g, '');
//       var mpat = pat.replace(/\s/g, '');
//       var finalData;
//       var currentimages={};
//       console.log('/Relation/' + mdoc + '/' + mpat + '/diagnosis');
//       var ref = database.ref('/Relation/' + mdoc + '/' + mpat + '/diagnosis');
//
//       // Attach an asynchronous callback to read the data at our posts reference
//       ref.once("value", function(snapshot) {
//       currentimages = snapshot.val();
//       console.log(currentimages);
//       if(currentimages!="{}"||currentimages===null){
//         console.log("dis img");
//         currentimages.push(postData);
//         finalData = currentimages;
//       }
//       else{
//         console.log("here");
//         finalData = [];
//         finalData.push(postData);
//       }
//       ref.set(finalData);
//       console.log("done");
//       }, function (errorObject) {
//         console.log("The read failed: " + errorObject.code);
