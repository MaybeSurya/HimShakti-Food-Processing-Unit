const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: String, // Can store custom slug ID or Mongoose ObjectId
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
}, { _id: false });

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      trim: true
    },
    products: {
      type: [orderItemSchema],
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "Processing",
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);
