const NotFound = (req, res) => {
  res.status(404).send("This route does not exist");
};

module.exports = NotFound;
