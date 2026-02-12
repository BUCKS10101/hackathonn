function register() {
  const user = {
    name: name.value,
    email: email.value
  };

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "role.html";
}
