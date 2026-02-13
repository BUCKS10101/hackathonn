const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    deliveryPartnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    otp: String,
    status: {
      type: String,
      enum: ["assigned", "on_the_way", "completed"],
      default: "assigned"
    },
    messages: [
      {
        sender: String, // "user" or "driver"
        text: String,
        timestamp: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Delivery", deliverySchema);
