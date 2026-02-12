const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    restaurant: String,
    items: [String],
    totalAmount: Number,
    tip: Number,
    status: {
      type: String,
      enum: ["pending", "accepted", "delivered"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
