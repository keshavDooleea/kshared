require("dotenv/config");
const SERVER_PORT = 5000;
const registerUser = require("./server/logics/register");
const userLogin = require("./server/logics/user-login");
const User = require("./server/modals/user").User;

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

const user = {};

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
  socket.on("pageRefresh", async (data) => {
    let decodedUser = jwt.verify(data, process.env.JWT_TOKEN);

    user.username = decodedUser.username;
    user.token = data;
    user.id = decodedUser._id;
    user.dateAccCreated = decodedUser.dateAccCreated;
    console.log(user.id);

    try {
      let currentUser = await User.findById(decodedUser._id);
      user.currentText = currentUser.currentText; // add text to user info

      socket.emit("initialLanding", user);
    } catch (error) {
      console.log("Updating current text error: ", error);
    }
  });

  socket.on("updateText", async (data) => {
    try {
      console.log(user.id);
      let currentUser = await User.findById(user.id);
      currentUser.currentText = data.text;
      await currentUser.save();

      user.currentText = currentUser.currentText; // add text to user

      io.emit("updatedText", user.currentText);
    } catch (error) {
      console.log("Updating current text error: ", error);
    }
  });
});

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
