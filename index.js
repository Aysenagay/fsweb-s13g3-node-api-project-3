// require your server and launch it
const server = require("./api/server");
const port = 9000;

server.listen(9000, () => {
  console.log(`Server running on port ${port}`);
});
