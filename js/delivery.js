let map;
let marker;

function initMap() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: pos
      });

      marker = new google.maps.Marker({
        position: pos,
        map,
        title: "Delivery Partner"
      });

      // simulate movement
      setInterval(() => {
        pos.lat += 0.0001;
        pos.lng += 0.0001;
        marker.setPosition(pos);
        map.panTo(pos);
      }, 2000);

    }, function() {
      alert("Location access denied.");
    });

  } else {
    alert("Geolocation not supported.");
  }

}

