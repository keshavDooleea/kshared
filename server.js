const SERVER_PORT = 5000;
const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("NEW USER");

  socket.on("newRegistration", (data) => {
    console.log(data);
  });

  socket.emit("initialLanding", "GOT YOU");
});

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
