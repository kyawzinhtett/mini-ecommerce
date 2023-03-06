const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide product title"],
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
    },
    category: {
      type: String,
      required: [true, "Please provide product category"],
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
