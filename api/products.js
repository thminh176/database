const fs = require('fs');

module.exports = (req, res) => {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const products = JSON.parse(data).products;
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
