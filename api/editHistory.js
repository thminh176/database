const { readFileSync } = require('fs');

module.exports = (req, res) => {
  const data = readFileSync('./db.json');
  const editHistory = JSON.parse(data).editHistory;
  res.status(200).json(editHistory);
};
