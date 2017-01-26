function getLocation(callbackFn) {
  navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});

  navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      finalLocation = {latitude: lat, longitude: lng};

      callbackFn(finalLocation);
  }, function (e) {

  }, {
      enableHighAccuracy: true
  });
}

console.log(getLocation(printLOC));

function printLOC(finalLocation){
  return finalLocation;
}

var geocoder = new google.maps.Geocoder;

function geocodeLatLng(geocoder) {
   var latlng = printLOC(finalLocation);
   geocoder.geocode({'location': latlng}, function(results, status) {
     if (status === 'OK') {
       if (results[1]) {
        address = (results[1].formatted_address);
       }
     }
   });
   return address;
 }
