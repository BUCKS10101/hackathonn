let map;

const destination = { lat: 12.9722, lng: 79.1596 }; // Delivery Block

function initMap() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
      function (position) {

        const start = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: start
        });

        // Delivery Partner Marker
        new google.maps.Marker({
          position: start,
          map: map,
          title: "You (Delivery Partner)"
        });

        // Destination Marker
        new google.maps.Marker({
          position: destination,
          map: map,
          title: "Delivery Location"
        });

        // Route Line
        new google.maps.Polyline({
          path: [start, destination],
          geodesic: true,
          strokeColor: "#b59b63",
          strokeOpacity: 1.0,
          strokeWeight: 4,
          map: map
        });

      },

      function () {
        alert("Location access denied.");
      }

    );

  } else {
    alert("Geolocation not supported.");
  }

}
