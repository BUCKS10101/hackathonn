const Delivery = require("../models/Delivery");

exports.assignDelivery = async (req, res) => {
  const delivery = await Delivery.create(req.body);
  res.json(delivery);
};

exports.verifyOTP = async (req, res) => {
  const { otp } = req.body;
  if (otp === "483921") {
    res.json({ success: true, message: "Delivery completed" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};
