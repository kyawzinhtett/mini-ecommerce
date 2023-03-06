const express = require("express");
const {
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/adminController");
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:productID").patch(editProduct).delete(deleteProduct);

module.exports = router;
