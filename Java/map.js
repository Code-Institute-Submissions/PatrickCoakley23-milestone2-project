       function initMap() {

        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: {lat: 51.903614, lng:  -8.468399}
          });

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