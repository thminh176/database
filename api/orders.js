const fs = require('fs');

module.exports = (req, res) => {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const orders = JSON.parse(data).orders;
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
