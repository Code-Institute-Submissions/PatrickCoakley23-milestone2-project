var map;
var service;
var infowindow;

function initMap() {
  var cork = new google.maps.LatLng(51.903614, -8.468399);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 15,
  });

  var request = {
    location: cork,
    radius: 20000,
    types: ["cafe"]
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


/* function initMap() {

        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: {lat: 51.903614, -8.468399}
          });
        }

        */

/*
          var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

           var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
    var locations = [
        {lat: 51.929091, lng: -8.570564},
        {lat: 51.838163314, lng: -8.487998048},
        {lat: 51.893497, lng:-8.491873},
    ]

    */
