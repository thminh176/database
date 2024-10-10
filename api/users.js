const { readFileSync } = require('fs');

module.exports = (req, res) => {
  const data = readFileSync('./db.json');
  const users = JSON.parse(data).users;
  res.status(200).json(users);
};
