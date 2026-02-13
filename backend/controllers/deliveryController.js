const Delivery = require("../models/Delivery");

exports.assignDelivery = async (req, res) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const delivery = await Delivery.create({
      ...req.body,
      otp,
      status: 'assigned'
    });
    // In a real app, send OTP to customer. For now, returning it to display in console/response.
    res.json({ deliveryId: delivery._id, otp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { deliveryId, otp } = req.body;
    const delivery = await Delivery.findById(deliveryId);

    if (!delivery) {
      return res.status(404).json({ success: false, message: "Delivery not found" });
    }

    if (delivery.otp === otp) {
      delivery.status = 'completed';
      await delivery.save();
      res.json({ success: true, message: "Delivery completed" });
    } else {
      res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.sendChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { sender, text } = req.body;

    const delivery = await Delivery.findById(id);
    if (!delivery) return res.status(404).json({ error: "Delivery not found" });

    const message = { sender, text, timestamp: new Date() };
    delivery.messages.push(message);
    await delivery.save();

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getChat = async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findById(id);
    if (!delivery) return res.status(404).json({ error: "Delivery not found" });

    res.json(delivery.messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDeliveryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findById(id);
    if (!delivery) return res.status(404).json({ error: "Delivery not found" });
    res.json(delivery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
