const { readFileSync } = require('fs');

module.exports = (req, res) => {
  const data = readFileSync('./db.json');
  const orders = JSON.parse(data).orders;
  res.status(200).json(orders);
};
