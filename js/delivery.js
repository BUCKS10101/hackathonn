let map;
let marker;
let pos = { lat: 12.9716, lng: 77.5946 };

function initMap() {
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
}

// chat
function send() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");

  if (!input.value.trim()) return;

  chat.innerHTML += `<div>You: ${input.value}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}


