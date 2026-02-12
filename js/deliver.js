const container = document.getElementById("orders");

deliveryOrders.forEach(o => {
  const div = document.createElement("div");
  div.className = "option";
  div.innerHTML = `
    <b>${o.restaurant}</b><br>
    Block: ${o.block} | Items: ${o.items}<br>
    Tip: ₹${o.tip} | ${o.distance}
  `;
  div.onclick = () => {
    localStorage.setItem("activeDelivery", JSON.stringify(o));
    window.location.href = "deliver-preview.html";
  };
  container.appendChild(div);
});
