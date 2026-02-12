function verifyOTP() {
  const entered = document.getElementById("otpInput").value;
  const status = document.getElementById("otpStatus");

  if (entered === "483921") {
    status.innerHTML = "✅ Delivery completed. Payment released.";
    status.style.color = "green";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2500);

  } else {
    status.innerHTML = "❌ Incorrect OTP";
    status.style.color = "red";
  }
}
