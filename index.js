const data = require("./db_todos.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(middlewares);
server.use(router);
const start = server.listen(port);
if (start) {
  console.log(`Server is running on port ${port}`);
} else {
  console.log(`There was an error listening on port ${port}`);
}
