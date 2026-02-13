const express = require("express");
const router = express.Router();
const {
  assignDelivery,
  verifyOTP,
  sendChat,
  getChat
} = require("../controllers/deliveryController");

router.post("/assign", assignDelivery);
router.post("/verify-otp", verifyOTP);

// Chat Routes
router.post("/:id/chat", sendChat);
router.get("/:id/chat", getChat);

// Status Route
const { getDeliveryStatus } = require("../controllers/deliveryController");
router.get("/:id", getDeliveryStatus);

module.exports = router;
