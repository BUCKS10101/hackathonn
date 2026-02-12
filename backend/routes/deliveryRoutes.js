const express = require("express");
const router = express.Router();
const {
  assignDelivery,
  verifyOTP
} = require("../controllers/deliveryController");

router.post("/assign", assignDelivery);
router.post("/verify-otp", verifyOTP);

module.exports = router;
