function initMap() {
  const start = { lat: 12.9698, lng: 79.1582 };
  const destination = { lat: 12.9722, lng: 79.1596 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: start
  });

  new google.maps.Marker({
    position: start,
    map,
    title: "You (Delivery Partner)"
  });

  new google.maps.Marker({
    position: destination,
    map,
    title: "Delivery Location"
  });

  new google.maps.Polyline({
    path: [start, destination],
    geodesic: true,
    strokeColor: "#b59b63",
    strokeOpacity: 1.0,
    strokeWeight: 4,
    map
  });
}
