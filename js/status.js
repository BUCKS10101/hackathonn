const statusDiv = document.getElementById("status");

async function assignDelivery() {
  const orderId = localStorage.getItem("currentOrderId");
  if (!orderId) {
    statusDiv.innerHTML = "<h3>❌ Error</h3><p>No active order found.</p>";
    return;
  }

  try {
    const response = await fetch("http://localhost:5001/api/delivery/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId })
    });

    const data = await response.json();

    if (data.deliveryId) {
      localStorage.setItem("currentDeliveryId", data.deliveryId);
      localStorage.setItem("deliveryOtp", data.otp);

      statusDiv.innerHTML = "<h3>✅ Order Accepted</h3><p>Delivery partner assigned</p>";

      setTimeout(() => {
        window.location.href = "delivery.html";
      }, 2000);
    } else {
      statusDiv.innerHTML = "<h3>⚠️ Searching...</h3><p>Looking for nearby partners</p>";
      // Retry or handle accordingly
    }

  } catch (error) {
    console.error(error);
    statusDiv.innerHTML = "<h3>❌ Connection Error</h3><p>Could not connect to server.</p>";
  }
}

// Start assignment process
setTimeout(assignDelivery, 1500);
