async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5001/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      alert("User registered successfully!");
      window.location.href = "role.html";
    } else {
      alert(data.error || "Registration failed");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Server error");
  }
}
