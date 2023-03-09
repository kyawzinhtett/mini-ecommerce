const express = require("express");
const {
  getAllProducts,
  getAddProduct,
  createProduct,
  getEditProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/adminController");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/add-product").get(getAddProduct).post(createProduct);
router.route("/edit-product/:productID").get(getEditProduct).post(editProduct);
router.route("/delete-product/:productID").post(deleteProduct);

module.exports = router;
