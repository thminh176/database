const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Đảm bảo rằng 'db.json' nằm ở đúng vị trí
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export as Vercel function
module.exports = (req, res) => {
  server(req, res);
};
