let selectedRestaurant = "";
let cart = [];

function selectRestaurant(name) {
  selectedRestaurant = name;
  localStorage.setItem("restaurant", name);
  window.location.href = "menu.html";
}

function addItem(item, price) {
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const box = document.getElementById("cart");
  const totalBox = document.getElementById("total");
  let total = 0;

  box.innerHTML = "";
  cart.forEach(i => {
    total += i.price;
    box.innerHTML += `<div>${i.item} - ₹${i.price}</div>`;
  });

  totalBox.textContent = "Total: ₹" + total;
}

function checkout() {
  window.location.href = "checkout.html";
}
