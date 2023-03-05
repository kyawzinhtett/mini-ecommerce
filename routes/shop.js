const express = require("express");
const {
  getIndex,
  getAllProducts,
  getProduct,
  getCart,
} = require("../controllers/shopController");
const router = express.Router();

router.get("/", getIndex);
router.get("/products", getAllProducts);
router.get("/products/:productID", getProduct);
router.get("/cart", getCart);

module.exports = router;
