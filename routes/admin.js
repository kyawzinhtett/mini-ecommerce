const express = require("express");
const {
  getAllProducts,
  getAddProduct,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/adminController");
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/add-product").get(getAddProduct);
router.route("/:productID").patch(editProduct).delete(deleteProduct);

module.exports = router;
