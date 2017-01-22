var config = {
  apiKey: "AIzaSyDa2Jw2AY8rKjEOHjC3zpSr5o6uxOzKbI0",
  authDomain: "lost-and-found-e04ad.firebaseapp.com",
  databaseURL: "https://lost-and-found-e04ad.firebaseio.com",
  storageBucket: "lost-and-found-e04ad.appspot.com",
  messagingSenderId: "404142438505"
};
firebase.initializeApp(config);

function determineUID(){
  var finalLocation;
  var urlvars = document.URL.match(/(\?|\&)([^=]+)\=([^&]+)/g);
  console.log(urlvars);
  var uid = urlvars[0];
  uid = uid.substring(5);
  console.log(uid);
}
function storeloc(lat,long){
  console.log(lat);
  console.log(long);
}
function storeaddress(add){
  console.log(add.formatted_address);
}
