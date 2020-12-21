require("dotenv/config");
const SERVER_PORT = process.env.PORT || 5000;
const registerUser = require("./server/logics/register");
const userLogin = require("./server/logics/user-login");
const { awsFileUpload, awsGetFileUrl, awsDeleteSingleFile } = require("./server/logics/aws");
const getInnerHTML = require("./server/logics/innerHtml");
const User = require("./server/modals/user").User;

const formidableMiddleware = require("express-formidable");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.use(formidableMiddleware({ multiples: true }));
app.use(cors());
app.use(bodyParser.json({ limit: "300mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "300mb" }));
app.use(express.json());

app.post("/", async (req, res, next) => {
  await uploadFile(req, res);
});

// https://socket.io/docs/v3/emit-cheatsheet/

io.on("connection", async (socket) => {
  let token = socket.handshake.query.token;

  // new user has registered an acc
  socket.on("newRegistration", async (data) => {
    await registerUser(data, socket);
  });

  // user has logged in
  socket.on("newUserLogin", async (data) => {
    token = await userLogin(data, socket);
  });

  socket.on("enteredHome", (token) => {
    const user = findUser(token);
    socket.join(user.id);
  });

  // to remove
  socket.on("onLogOut", (oldToken) => {
    onLogOut(oldToken, socket);
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

  socket.on("openNote", async (data) => {
    await updateNote(data, socket);
  });

  // new note being saved
  socket.on("saveNoteList", async (data) => {
    await saveNoteList(data, socket);
  });

  socket.on("lockFile", async (data) => {
    await toggleLock(data, io);
  });

  socket.on("deleteSingleFile", async (data) => {
    await onSingleFileDelete(data, io);
  });

  socket.on("disconnect", async () => {});
});

const onLogOut = (oldToken, socket) => {
  const user = findUser(oldToken);
  socket.leave(user.id);
  socket.emit("appLogOut");
  console.log(`${user.username} left the server`);
};

const uploadFile = async (req, res) => {
  const token = req.fields.token;
  const file = req.files.file;

  try {
    // get db user
    const user = findUser(token);
    const dbUser = await User.findById(user.id);

    // check if exists
    for (let i = 0; i < dbUser.files.length; i++) {
      if (dbUser.files[i].name === file.name) {
        res.json("File exists");
        return;
      }
    }

    // can upload and get url
    const amazonName = user.id + "," + file.name;
    await awsFileUpload(file, amazonName);
    const url = await awsGetFileUrl(amazonName, file.name);
    const innerHtml = getInnerHTML(file.name);

    const newFile = {
      size: file.size,
      name: file.name,
      amazonUrl: url,
      amazonName: amazonName,
      innerHTML: innerHtml,
    };

    dbUser.files.push(newFile);
    await dbUser.save();
    const savedFile = await User.findOne({ _id: user.id }, { files: { $elemMatch: newFile } });
    newFile.id = savedFile.files[0]._id;

    res.json("Success");
    io.in(user.id).emit("uploadedFile", newFile);
  } catch (error) {
    console.log(error);
  }
};

const deleteAccount = async (token, io) => {
  const user = findUser(token);

  try {
    io.in(user.id).emit("deletedAccount");
    console.log(`${user.username} deleted his/her account`);
    await User.findByIdAndDelete(user.id);
  } catch (err) {
    console.log("Delete account error: ", err);
  }
};

// when browser has been refreshed
const pageRefresh = async (data, socket) => {
  const user = findUser(data);
  socket.join(user.id);
  console.log(`${user.username} rejoined the server (page refresh)`);

  try {
    let currentUser = await User.findById(user.id);

    // update user details
    user.currentText = currentUser.currentText;
    user.noteList = currentUser.notes;
    user.stars = currentUser.stars;
    user.files = currentUser.files;

    socket.emit("initialLanding", user);
  } catch (error) {
    console.log("Updating current text error: ", error);
  }
};

// when writing on textarea
const updateText = async (data, socket) => {
  try {
    // send back text straight away
    const user = findUser(data.token);
    socket.join(user.id);
    console.log(`${user.username} is writing`);
    socket.to(user.id).emit("updatedText", data.text); // sending to every username except sender
    await User.findByIdAndUpdate({ _id: user.id }, { currentText: data.text });
  } catch (error) {
    console.log("Updating current text error: ", error);
  }
};

// when clicked on individual note
const updateNote = async (data, socket) => {
  try {
    const user = findUser(data.token);
    socket.join(user.id);
    io.in(user.id).emit("updatedText", data.text); // sending to every username except sender
    await User.findByIdAndUpdate({ _id: user.id }, { currentText: data.text });
  } catch (error) {
    console.log("Updating current note error: ", error);
  }
};

// saving textarea into a note
const saveNoteList = async (data, socket) => {
  const user = findUser(data.token);

  try {
    let currentUser = await User.findById(user.id);
    data.notes.forEach((note) => (note.canShow = true));
    currentUser.notes = data.notes;

    // sort notes by latest date
    currentUser.notes.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    await currentUser.save();

    socket.to(user.id).emit("getNotes", currentUser.notes);
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

const toggleLock = async (data, io) => {
  try {
    const user = findUser(data.token);

    // send the updated file with index to client
    const lockFileData = {
      file: data.file,
      index: data.index,
    };
    io.in(user.id).emit("toggledLock", lockFileData);

    // update in mongo
    await User.updateOne({ _id: user.id }, { $set: { "files.$[currentFile].isLocked": data.file.isLocked } }, { arrayFilters: [{ "currentFile._id": data.file._id }] });
  } catch (error) {
    console.log(`Toggle file lock error: ${error}`);
  }
};

const onSingleFileDelete = async (data, io) => {
  try {
    const user = findUser(data.token);

    // send the updated file with index to client
    const lockFileData = {
      file: data.file,
      index: data.index,
    };
    io.in(user.id).emit("deleteSingleFile", lockFileData);

    // delete from mongo and s3
    const fileID = data.file._id ? data.file._id : data.file.id;
    await User.updateOne({ _id: user.id }, { $pull: { files: { _id: fileID } } });
    await awsDeleteSingleFile(data.file.amazonName);
  } catch (error) {
    console.log(`Delete single file error: ${error}`);
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

// deployment - production static html files
app.use(express.static(__dirname + "/frontend/dist/frontend"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/dist/frontend/index.html"));
});

server.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
