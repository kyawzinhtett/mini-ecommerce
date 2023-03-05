const getIndex = async (req, res) => {
  res.render("index");
};

const getAllProducts = async (req, res) => {
  res.render("category");
};

const getProduct = async (req, res) => {
  res.render("single-product");
};

const getCart = async (req, res) => {
  res.render("cart");
};

module.exports = {
  getIndex,
  getAllProducts,
  getProduct,
  getCart,
};
