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

// https://socket.io/docs/v3/emit-cheatsheet/

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

  // to remove
  socket.on("onLogOut", (oldToken) => {
    socket.emit("appLogOut");
  });

  socket.on("deleteAccount", async (token) => {
    await deleteAccount(token, io);
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
    await updateText(data, socket);
  });

  // new note being saved
  socket.on("saveNoteList", async (data) => {
    await saveNoteList(data, io);
  });

  socket.on("disconnect", async () => {});
});

const deleteAccount = async (token, io) => {
  const user = findUser(token);

  try {
    io.in(user.username).emit("deletedAccount");
    await User.findByIdAndDelete(user.id);
  } catch (err) {
    console.log("Delete account error: ", err);
  }
};

const pageRefresh = async (data, socket) => {
  const user = findUser(data);
  socket.join(user.id);

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

const updateText = async (data, socket) => {
  try {
    // send back text straight away
    const user = findUser(data.token);
    console.log(user.id);
    socket.to(user.id).emit("updatedText", data.text); // sending to every username except sender
    await User.findByIdAndUpdate({ _id: user.id }, { currentText: data.text });
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

    io.in(user.id).emit("getNotes", currentUser.notes);
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
    const user = findUser(data.token);
    io.in(user.id).emit("updatedStars", data.stars);
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

app.use(express.static(__dirname + "/frontend/dist/frontend"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/dist/frontend/index.html"));
});

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
