const { readFileSync } = require('fs');

module.exports = (req, res) => {
  const data = readFileSync('./db.json');
  const products = JSON.parse(data).products;
  res.status(200).json(products);
};
