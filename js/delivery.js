let map;
let marker;

function initMap() {
  // Default fallback position (Bangalore)
  const defaultPos = { lat: 12.9716, lng: 77.5946 };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        startMap(position.coords.latitude, position.coords.longitude);
      },
      () => {
        // Access denied or error, use default
        startMap(defaultPos.lat, defaultPos.lng);
      }
    );
  } else {
    // No geolocation support
    startMap(defaultPos.lat, defaultPos.lng);
  }
}

function startMap(lat, lng) {
  // Initialize Leaflet Map
  map = L.map('map').setView([lat, lng], 15);

  // Add OpenStreetMap Tile Layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Add Marker
  marker = L.marker([lat, lng]).addTo(map)
    .bindPopup('Delivery Partner')
    .openPopup();

  // Simulate Movement
  setInterval(() => {
    lat += 0.0001; // Move slightly north
    lng += 0.0001; // Move slightly east

    marker.setLatLng([lat, lng]);
    map.panTo([lat, lng]);

    // Update distance/ETA mock
    document.getElementById("distance").innerText = "Distance: 1.2 km";
    document.getElementById("eta").innerText = "ETA: 5 mins";

  }, 2000);
}

