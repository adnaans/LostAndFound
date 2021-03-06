var config = {
  apiKey: "AIzaSyDa2Jw2AY8rKjEOHjC3zpSr5o6uxOzKbI0",
  authDomain: "lost-and-found-e04ad.firebaseapp.com",
  databaseURL: "https://lost-and-found-e04ad.firebaseio.com",
  storageBucket: "lost-and-found-e04ad.appspot.com",
  messagingSenderId: "404142438505"
};
firebase.initializeApp(config);
var uuid;
function determineUID(){
  var finalLocation;
  var urlvars = document.URL.match(/(\?|\&)([^=]+)\=([^&]+)/g);
  //console.log(urlvars);
  var uuidtemp = urlvars[0];
  uuid = uuidtemp.substring(5);
  //console.log(uuid);
}
function storeloc(lat,long){
  console.log(lat);
  console.log(long);
}
function updateTime(time){
  return time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" on "+(time.getMonth()+1)+"-"+time.getDate()+"-"+time.getFullYear();
}
function storeaddressandtime(add){
  var uid;
  var address = add.formatted_address;
  var time = new Date();
  //console.log(time.getMonth());
  time = updateTime(time);
  var itemname;
  //console.log(time);
  firebase.database().ref('/Items').once('value').then(function(snapshot){
    uid = snapshot.val()[uuid];
    console.log(uid);
    //console.log(uid);
    //console.log(uuid);
    firebase.database().ref('/Users/'+uid + '/items/' + uuid).once('value').then(function(snapshot2){
      console.log(snapshot2.val());
      itemname = snapshot2.val()["name"];
      var updates = {};
      //console.log(itemname);
      var postData = {
        name: itemname,
        location: address,
        time: time
      };
      updates['/Users/'+uid + '/items/'+uuid] = postData;
      firebase.database().ref().update(updates).then(function(){
      console.log("updates pushed");
      alert("Thank you! The location was transmitted. I'm sure the person you just help will be grateful. You may close this site if you like.");
      });
    });
  });

}
