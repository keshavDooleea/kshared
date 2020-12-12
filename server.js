require("dotenv/config");
const SERVER_PORT = 5000;
const registerUser = require("./server/logics/register");
const userLogin = require("./server/logics/user-login");

const jwt = require("jsonwebtoken");
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

  // new user has registered an acc
  socket.on("newRegistration", async (data) => {
    await registerUser(data, socket);
  });

  // user has logged in
  socket.on("newUserLogin", async (data) => {
    await userLogin(data, socket);
  });

  // when browser refreshes, get user details
  socket.on("JWT", (data) => {
    let decodedUser = jwt.verify(data, process.env.JWT_TOKEN);

    const userInfo = {
      username: decodedUser.username,
      token: data,
      id: decodedUser._id,
      dateCreated: decodedUser.dateAccCreated,
    };

    socket.emit("initialLanding", JSON.stringify(userInfo));
  });
});

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
