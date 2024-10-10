const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Đảm bảo đường dẫn này đúng
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
