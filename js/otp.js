async function verifyOTP() {
  const entered = document.getElementById("otpInput").value;
  const status = document.getElementById("otpStatus");
  const deliveryId = localStorage.getItem("currentDeliveryId");

  if (!deliveryId) {
    status.innerHTML = "❌ No active delivery found";
    status.style.color = "red";
    return;
  }

  try {
    const response = await fetch("http://localhost:5001/api/delivery/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deliveryId, otp: entered })
    });

    const data = await response.json();

    if (data.success) {
      status.innerHTML = "✅ Delivery completed. Payment released.";
      status.style.color = "green";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2500);
    } else {
      status.innerHTML = "❌ " + (data.message || "Incorrect OTP");
      status.style.color = "red";
    }
  } catch (error) {
    console.error(error);
    status.innerHTML = "❌ Server error";
    status.style.color = "red";
  }
}
