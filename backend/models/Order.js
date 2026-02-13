const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    restaurant: String,
    items: [
      {
        name: String,
        price: Number,
        qty: Number
      }
    ],
    totalAmount: Number,
    deliveryLocation: {
      category: String,
      block: String
    },
    tip: Number,
    status: {
      type: String,
      enum: ["pending", "paid", "accepted", "delivered"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
