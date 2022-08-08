const mongoose = require("mongoose");

const productCollection = "product"; // collection name

const productSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: [true, "Please enter product name"],
    max: 100,
  },
  desc: {
    type: "string",
    required: [true, "Please enter product description"],
    max: 1000,
  },
  img: {
    type: "string",
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  category: {
    type: "string",
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    default: 1,
  },
  status: {
    type: "boolean",
    required: true,
  },
  createdaAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: "boolean",
  },
});

module.exports.productModel = mongoose.model(productCollection, productSchema);
