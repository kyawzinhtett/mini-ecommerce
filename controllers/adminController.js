const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  const products = await Product.find().sort("-createdAt");
  res.status(200).render("admin", { products });
};

const getAddProduct = async (req, res) => {
  res.render("add-product");
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};

const editProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.productID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(202).json({
    product,
  });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({ _id: req.params.productID });
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getAddProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
