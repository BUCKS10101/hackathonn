const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    console.log("Creating order:", req.body);
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    console.error("Order creation failed:", error);
    res.status(500).json({ message: "Order creation failed", error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};
