const Product = require("../models/productModels");
const ErrorHandeler = require("../utils/errorhander");

// Create new product
const createProduct = async (req, res) => {
  const product = await Product.productModel.create(req.body);
  res.status(201).json({ success: true, product });
};

// get all product details
const getProduct = async (req, res) => {
  const getProduct = await Product.productModel.find();
  res.status(200).json({ success: true, getProduct });
};

// Get one product details
const getOneProduct = async (req, res, next) => {
  const product = await Product.productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandeler("Product not found", 404));
  }
  res.status(200).json({ success: true, product });
};

// Update one product --Admin
const updateProduct = async (req, res, next) => {
  var updateProduct = await Product.productModel.findById(req.params.id);

  if (!updateProduct) {
    res.status(500).json({ success: false, msg: "Product not found" });
  }
  updateProduct = await Product.productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, useFindAndModify: false }
  );
  res.status(200).json({ success: true, updateProduct });
};

// Delete one product
const deleteProduct = async (req, res) => {
  const deleteProduct = await Product.productModel.findById(req.params.id);

  if (!deleteProduct) {
    res.status(500).json({ success: false, msg: "Product not found" });
  } else {
    await deleteProduct.remove();
    res.status(200).json({ success: true, msg: "Product deleteed" });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
