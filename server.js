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

let currentTypingText = "";

io.on("connection", (socket) => {
  console.log("NEW USER");
  let token = socket.handshake.query.token;

  // new user has registered an acc
  socket.on("newRegistration", async (data) => {
    await registerUser(data, socket);
  });

  // user has logged in
  socket.on("newUserLogin", async (data) => {
    token = await userLogin(data, socket);
  });

  socket.on("onLogOut", (oldToken) => {
    saveText(oldToken);
  });

  // when browser refreshes, get user details
  socket.on("pageRefresh", async (data) => {
    const user = findUser(data);

    try {
      let currentUser = await User.findById(user.id);

      // update user details
      user.currentText = currentUser.currentText;
      user.noteList = currentUser.notes;

      socket.emit("initialLanding", user);
    } catch (error) {
      console.log("Updating current text error: ", error);
    }
  });

  socket.on("updateText", async (data) => {
    try {
      currentTypingText = data.text;

      io.emit("updatedText", currentTypingText);
    } catch (error) {
      console.log("Updating current text error: ", error);
    }
  });

  // new note being saved
  socket.on("saveNoteList", async (data) => {
    const user = findUser(data.token);

    try {
      let currentUser = await User.findById(user.id);
      currentUser.notes = data.notes;
      await currentUser.save();

      io.emit("getNotes", currentUser.notes);
    } catch (error) {
      console.log("Updating current note error: ", error);
    }
  });

  socket.on("disconnect", () => {
    saveText(token);
  });
});

const findUser = (data) => {
  let decodedUser = jwt.verify(data, process.env.JWT_TOKEN);
  const user = {};

  user.username = decodedUser.username;
  user.token = data;
  user.id = decodedUser._id;
  user.dateAccCreated = decodedUser.dateAccCreated;

  return user;
};

const saveText = async (token) => {
  if (!token) return;
  const user = findUser(token);

  try {
    let currentUser = await User.findById(user.id);
    currentUser.currentText = currentTypingText;
    await currentUser.save();
  } catch (err) {
    console.log("Disconnect error: ", err);
  }
};

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
