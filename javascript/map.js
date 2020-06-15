var map;

var service;
var infowindow;



function initMap() {
  var cork = new google.maps.LatLng(51.903614, -8.468399);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 11,
  });

  /// event listener to catch the placeType search when a new tab is selected
  var request = {
    location: cork,
    radius: 30000,
    types: ["lodging"]
  };
  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", function() 
    {
        infowindow.setContent(`<div> <strong>${place.name} </strong> <br>
        ${place.vicinity} <br>
        Rating:${place.rating} <br>
        ${place.types[0]} <br>
        <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank">View on Google Maps</a></div>`) ;
        infowindow.open(map, this);

        

    });

}


$(document).ready(function(){

$(".list-group-item").click(function(){
 var placeType = $(this).attr("data-val");
 initialize(placeType);
});

 function initialize(placeType) {
  var cork = new google.maps.LatLng(51.903614, -8.468399);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 11,
  });

  
/// event listener to catch the placeType search when a new tab is selected



  var request = {
    location: cork,
    radius: 30000,
    types: [""+placeType]
  };
  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", function() 
    {
        infowindow.setContent(`<div> <strong>${place.name} </strong> <br>
        ${place.vicinity} <br>
        Rating:${place.rating} <br>
        ${place.types[0]} <br>
        <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank">View on Google Maps</a></div>`) ;
        infowindow.open(map, this);

        

    });

}

});


