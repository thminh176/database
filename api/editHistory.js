const fs = require('fs');

module.exports = (req, res) => {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const editHistory = JSON.parse(data).editHistory;
    res.status(200).json(editHistory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
