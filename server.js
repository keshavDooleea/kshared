require("dotenv/config");
const SERVER_PORT = 5000;
const registerUser = require("./server/register");
const mongo = require("mongoose");

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

mongo.connect(
  process.env.MONGO_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connected to DB!");
  }
);

io.on("connection", (socket) => {
  console.log("NEW USER");

  socket.on("newRegistration", async (data) => {
    await registerUser(data, socket);
  });

  socket.emit("initialLanding", "GOT YOU");
});

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
