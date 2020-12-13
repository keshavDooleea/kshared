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
    io.emit("appLogOut");
  });

  socket.on("deleteAccount", async (token) => {
    await deleteAccount(token);
  });

  // when browser refreshes, get user details
  socket.on("pageRefresh", async (data) => {
    await pageRefresh(data, socket);
  });

  socket.on("updateText", async (data) => {
    await updateText(data, io);
  });

  // new note being saved
  socket.on("saveNoteList", async (data) => {
    await saveNoteList(data, io);
  });

  socket.on("disconnect", async () => {
    await saveText(token);
  });
});

const deleteAccount = async (token) => {
  const user = findUser(token);

  try {
    await User.findByIdAndDelete(user.id);
  } catch (err) {
    console.log("Delete account error: ", err);
  }
};

const pageRefresh = async (data, socket) => {
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
};

const updateText = async (data, io) => {
  try {
    currentTypingText = data.text;

    io.emit("updatedText", currentTypingText);
  } catch (error) {
    console.log("Updating current text error: ", error);
  }
};

const saveNoteList = async (data, io) => {
  const user = findUser(data.token);

  try {
    let currentUser = await User.findById(user.id);
    currentUser.notes = data.notes;
    await currentUser.save();

    io.emit("getNotes", currentUser.notes);
  } catch (error) {
    console.log("Updating current note error: ", error);
  }
};

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
