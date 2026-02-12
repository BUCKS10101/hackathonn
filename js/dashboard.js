function send() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");

  if (input.value.trim() === "") return;

  const message = document.createElement("div");
  message.textContent = "You: " + input.value;

  chat.appendChild(message);
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
