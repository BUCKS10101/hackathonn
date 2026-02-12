setTimeout(() => {
  document.getElementById("status").innerHTML =
    "<h3>✅ Order Accepted</h3><p>Delivery partner assigned</p>";

  setTimeout(() => {
    window.location.href = "delivery.html";
  }, 2000);

}, 5000);

setTimeout(() => {
  document.getElementById("status").innerHTML =
    "<h3>❌ Order Cancelled</h3><p>Refund initiated</p>";
}, 600000);
