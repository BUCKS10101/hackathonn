// LOAD cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SELECT RESTAURANT
function selectRestaurant(name) {
  localStorage.setItem("restaurant", name);
  window.location.href = "menu.html";
}

// ADD ITEM
function addItem(name, price) {
  price = Number(price);

  const existing = cart.find(i => i.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name,
      price,
      qty: 1
    });
  }

  saveCart();
  renderCart();
}

// RENDER CART
function renderCart() {
  const box = document.getElementById("cart");
  const totalBox = document.getElementById("total");

  if (!box || !totalBox) return;

  box.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    box.innerHTML += `
      <div>
        ${item.name} x${item.qty} - ₹${subtotal}
      </div>
    `;
  });

  totalBox.textContent = "Total: ₹" + total;
}

// SAVE
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// CHECKOUT
function checkout() {
  if (cart.length === 0) {
    console.log("Cart empty");
    return;
  }

  window.location.href = "location.html";
}

// Run when page loads
renderCart();
