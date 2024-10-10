const fs = require('fs');

module.exports = (req, res) => {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const users = JSON.parse(data).users;
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
