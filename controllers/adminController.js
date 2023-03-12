const Product = require("../models/Product");

// Get All Products
const getAllProducts = async (req, res) => {
  const products = await Product.find().sort("-createdAt");
  res.render("admin/admin", { products });
};

// Get Create Product Form
const getAddProduct = async (req, res) => {
  res.render("admin/add-product");
};

// Create Product
const createProduct = async (req, res) => {
  let imageUrl = req.file.path;
  const obj = {
    title: req.body.title,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
    category: req.body.category,
    imageUrl: imageUrl.slice(7),
  };
  const product = await Product.create(obj);
  res.redirect("/admin");
};

// Get Edit Product Form
const getEditProduct = async (req, res) => {
  const product = await Product.find({ _id: req.params.productID });
  res.render("admin/edit-product", {
    product,
  });
};

// Edit Product
const editProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.productID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.redirect("/admin");
};

// Delete Product
const deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({ _id: req.params.productID });
  res.redirect("/admin");
};

module.exports = {
  getAllProducts,
  getAddProduct,
  createProduct,
  getEditProduct,
  editProduct,
  deleteProduct,
};
