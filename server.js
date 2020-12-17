require("dotenv/config");
const SERVER_PORT = process.env.PORT || 5000;
const registerUser = require("./server/logics/register");
const userLogin = require("./server/logics/user-login");
const User = require("./server/modals/user").User;

const path = require("path");
const jwt = require("jsonwebtoken");
const mongo = require("mongoose");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.static(__dirname + "/dist/frontend"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});

mongo.connect(
  process.env.MONGO_URI || process.env.MONGO_CONNECTION,
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

io.on("connection", async (socket) => {
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
    io.emit("appLogOut");
  });

  socket.on("deleteAccount", async (token) => {
    await deleteAccount(token);
  });

  socket.on("updateStars", async (data) => {
    await updateStars(data, io);
  });

  socket.on("getGlobalStars", async () => {
    // for login page
    await getGlobalStars(socket);
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

  socket.on("disconnect", async () => {});
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
    user.stars = currentUser.stars;

    socket.emit("initialLanding", user);
  } catch (error) {
    console.log("Updating current text error: ", error);
  }
};

const updateText = async (data, io) => {
  try {
    // send back text straight away
    io.emit("updatedText", data.text);
    const user = findUser(data.token);
    const dbUser = await User.findById(user.id);
    dbUser.currentText = data.text;
    dbUser.save();
  } catch (error) {
    console.log("Updating current text error: ", error);
  }
};

const saveNoteList = async (data, io) => {
  const user = findUser(data.token);

  try {
    let currentUser = await User.findById(user.id);
    currentUser.notes = data.notes;

    // sort notes by latest date
    currentUser.notes.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    await currentUser.save();

    io.emit("getNotes", currentUser.notes);
  } catch (error) {
    console.log("Updating current note error: ", error);
  }
};

const getGlobalStars = async (socket) => {
  try {
    // all stars of all users above 0
    let starsCollection = await User.find({ stars: { $gt: 0 } }, { _id: 0, stars: 1 });

    let globalStar = starsCollection.map((star) => star.stars).reduce((a, b) => a + b);
    globalStar = Math.floor(globalStar / starsCollection.length);

    socket.emit("avgStars", globalStar);
  } catch (err) {
    console.log("Global stars err:", err);
  }
};

const updateStars = async (data, io) => {
  try {
    io.emit("updatedStars", data.stars);
    const user = findUser(data.token);
    await User.findByIdAndUpdate({ _id: user.id }, { stars: data.stars });
  } catch (err) {
    console.log("Updating stars error: ", err);
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

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
