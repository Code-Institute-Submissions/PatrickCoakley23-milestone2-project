var map;
var service;
var infowindow;
var google;

// When the map loads first this function is rendered 
function initMap() {
  var cork = new google.maps.LatLng(51.903614, -8.468399);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 11,
  });

 // The request is put in to load up these variables on the map
  var request = {
    location: cork,
    radius: 30000,
    types: ["lodging"],
    fields: ["name", "formatted_addres", "photo", "url", "formatted_phone_number", "price_level", "rating", "review", "website"]
  };
  infowindow = new google.maps.InfoWindow();
 
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

// A for loop to place a marker for all the hotels
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

//Event listner which loads place information when user clicks on the marker
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", function() 
    {
        console.log(place)
        infowindow.setContent(`<div>
        <img src="${place.photos[0].getUrl({'maxWidth': 200, 'maxHeight': 140})}" alt=""><br>
        <strong>${place.name}</strong><br>
        <strong>Rating:</strong> ${place.rating}<br>
         ${place.vicinity}<br>
         ${place.types[0]}<br>
        <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank">View on Google Maps</a> 
         </div> `) ;

        infowindow.open(map, this);
    });
}

// Event listener which waits for the click of the tab panel to load either hotel/bar/restaurant/tourist-attraction markers on the map
$(".list-group-item").click(function(){
 var placeType = $(this).attr("data-val");
 initialize(placeType);
});

//Waits for click of tab panel to 'initalize map'
 function initialize(placeType) {
  var cork = new google.maps.LatLng(51.903614, -8.468399);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 11,
  });

  //types: waiting on placetype to be clicked
  var request = {
    location: cork,
    radius: 30000,
    types: [""+placeType]
  };
  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

//for loop to create markers
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

//place information when marker is clicked]
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", function() 
    {
        infowindow.setContent(`<div>
        <img src="${place.photos[0].getUrl({'maxWidth': 200, 'maxHeight': 140})}" alt=""><br>
        <strong>${place.name}</strong><br>
        <strong>Rating:</strong> ${place.rating}<br>
         ${place.vicinity}<br>
         ${place.types[0]}<br>
        <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank">View on Google Maps</a> 
         </div> `
        
        ) ;
        infowindow.open(map, this);
     });

    }
