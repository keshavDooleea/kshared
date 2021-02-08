require("dotenv/config");
const SERVER_PORT = process.env.PORT || 5000;
const registerUser = require("./server/logics/register");
const userLogin = require("./server/logics/user-login");
const { awsFileUpload, awsGetFileUrl, awsDeleteSingleFile } = require("./server/logics/aws");
const getInnerHTML = require("./server/logics/innerHtml");
const sendEmail = require("./server/logics/email");
const getDashboardData = require("./server/logics/dashboard");
const User = require("./server/modals/user").User;

const formidableMiddleware = require("express-formidable");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const mongo = require("mongoose");
const ObjectId = mongo.Types.ObjectId;
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

// middlewares
app.use(formidableMiddleware({ multiples: true, maxFileSize: "200mb" }));
app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "200mb" }));
app.use(express.json());

const MAX_SIZE = 200; // MB
const MAX_MONGO_SIZE = 15; // MB

app.post("/", async (req, res, next) => {
  req.setTimeout(300000); // 300 sec -> 5 mins

  const mbSize = parseFloat((req.files.file.size / (1024 * 1024)).toFixed(2));
  if (mbSize <= MAX_SIZE) {
    // upload to mongo if size < 15, else to amazon
    mbSize <= MAX_MONGO_SIZE ? await uploadToMongo(req, res) : await uploadToAmazon(req, res);
  }
});

// https://socket.io/docs/v3/emit-cheatsheet/

io.on("connection", async (socket) => {
  let token = socket.handshake.query.token;
  if (token) {
    await pageRefresh(token, socket);
  }

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
    await deleteAccount(token, socket, io);
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

  socket.on("updateNote", async (data) => {
    await updateNote(data, socket, io);
  });

  socket.on("addNewNoteID", async (data) => {
    await addNewNoteID(data, socket, io);
  });

  // new note being saved
  socket.on("saveNoteList", async (data) => {
    await saveNoteList(data, socket);
  });

  socket.on("lockFile", async (data) => {
    await toggleLock(data, io);
  });

  socket.on("deleteFile", async (data) => {
    await onSingleFileDelete(data, io);
  });

  socket.on("clearFiles", async (data) => {
    await clearFiles(data, io);
  });

  socket.on("getSignedUrl", async (data) => {
    await getSignedLink(data, socket);
  });

  socket.on("sendEmail", async (data) => {
    try {
      await sendEmail(data);
      socket.emit("emailResponse", "200");
    } catch (error) {
      socket.emit("emailResponse", "500");
    }
  });

  socket.on("dashboardConnected", async () => {
    await getDashboardData(socket);
  });

  socket.on("getAllUsers", async () => {
    await getAllUsers(socket);
  });

  socket.on("sendNoteNotifications", async (data) => {
    await sendNoteNotifications(io, data);
  });

  socket.on("removeNotification", async (data) => {
    await removeNotification(io, data, socket);
  });

  socket.on("disconnect", async () => {});
});

const onLogOut = (oldToken, socket) => {
  const user = findUser(oldToken);
  socket.leave(user.id);
  socket.emit("appLogOut");
  console.log(`${user.username} left the server`);
};

const uploadToMongo = async (req, res) => {
  console.log("Uploading to Mongo");
  const token = req.fields.token;
  const base64 = JSON.parse(req.fields.base64);
  const file = req.files.file;

  if (!base64 || !file) return;

  try {
    const user = findUser(token);
    const dbUser = await User.findById(user.id);

    // check if exists
    for (let i = 0; i < dbUser.files.length; i++) {
      if (dbUser.files[i].name === file.name) {
        res.json("File exists");
        return;
      }
    }

    const innerHtml = getInnerHTML(file.name);
    const newFile = {
      size: file.size,
      name: file.name,
      amazonName: "",
      innerHTML: innerHtml,
      base64,
      isMongoFile: true,
    };

    dbUser.files.push(newFile);
    await dbUser.save();

    const savedFile = await User.findOne({ _id: user.id }, { files: { $elemMatch: newFile } });
    newFile._id = savedFile.files[0]._id;

    res.json("Success");
    io.in(user.id).emit("uploadedFile", newFile);
  } catch (eror) {
    console.log(`Uploading to Mongo DB error: ${error}`);
  }
};

const uploadToAmazon = async (req, res) => {
  console.log("Uploading to Amazon");

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

    const amazonName = user.id + "," + file.name;
    await awsFileUpload(file, amazonName);
    const innerHtml = getInnerHTML(file.name);

    const newFile = {
      size: file.size,
      name: file.name,
      amazonName: amazonName,
      innerHTML: innerHtml,
      base64: "",
      isMongoFile: false,
    };

    dbUser.files.push(newFile);
    await dbUser.save();
    const savedFile = await User.findOne({ _id: user.id }, { files: { $elemMatch: newFile } });
    newFile._id = savedFile.files[0]._id;

    res.json("Success");
    io.in(user.id).emit("uploadedFile", newFile);
  } catch (error) {
    console.log(error);
  }
};

const deleteAccount = async (token, socket, io) => {
  const user = findUser(token);

  try {
    socket.join(user.id);
    io.in(user.id).emit("deletedAccount");
    console.log(`${user.username} deleted his/her account`);
    const dbUser = await User.findByIdAndDelete(user.id);

    for (let i = 0; i < dbUser.files.length; i++) {
      await deleteOneFile(dbUser.files[i], token);
    }
  } catch (err) {
    console.log("Delete account error: ", err);
  }
};

// when browser has been refreshed
const pageRefresh = async (data, socket) => {
  const user = findUser(data);
  socket.join(user.id);
  getGlobalStars(socket);
  console.log(`${user.username} rejoined the server (page refresh)`);

  try {
    let currentUser = await User.findById(user.id);

    currentUser.notes.forEach((note, index) => {
      if (note.text === "") {
        currentUser.notes.splice(index, 1);
      }
    });
    await currentUser.save();

    // update user details
    user.currentText = currentUser.currentText;
    user.noteList = currentUser.notes;
    user.stars = currentUser.stars;
    user.files = currentUser.files;
    user.notifications = currentUser.notifications;
    socket.emit("initialLanding", user);
  } catch (error) {
    console.log("Updating current text error: ", error);
  }
};

const getSignedLink = async (data, socket) => {
  try {
    const url = await awsGetFileUrl(data.amazonName, data.name);
    // const url = "HELLO";
    const returnData = {
      url,
      index: data.index,
    };
    console.log("got the signed url");
    socket.emit("signedUrl", returnData);
  } catch (error) {
    console.log(`Getting signed URL error: ${error}`);
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

// when wrintin on individual note
const updateNote = async (data, socket, io) => {
  try {
    const user = findUser(data.token);
    socket.join(user.id);

    // io.in(user.id).emit("updatedText", data.text); // sending to every username except sender
    const dbUser = await User.findById(user.id);
    dbUser.notes.forEach((note, index) => {
      if (note._id.equals(data.noteID)) {
        note.text = data.text;
      }
    });
    await dbUser.save();
    io.in(user.id).emit("getNotes", dbUser.notes);

    // await User.findByIdAndUpdate({ _id: user.id }, { currentText: data.text });
  } catch (error) {
    console.log("Updating current note error: ", error);
  }
};

const addNewNoteID = async (data, socket, io) => {
  try {
    const user = findUser(data.token);
    socket.join(user.id);

    const newID = new ObjectId();
    const newNote = {
      _id: newID,
      text: data.text,
      date: Date.now(),
      canShow: true,
      welcomeNote: false,
    };

    const dbUser = await User.findById(user.id);
    dbUser.notes.push(newNote);

    // sort notes by latest date
    dbUser.notes.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    await dbUser.save();

    io.in(user.id).emit("currentNote", newNote);
    io.in(user.id).emit("getNotes", dbUser.notes);
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
    const index = data.index;
    io.in(user.id).emit("toggledLock", index);

    // update in mongo
    const fileID = data._id ? data._id : data.id;
    await User.updateOne({ _id: user.id }, { $set: { "files.$[currentFile].isLocked": data.isLocked } }, { arrayFilters: [{ "currentFile._id": fileID }] });
  } catch (error) {
    console.log(`Toggle file lock error: ${error}`);
  }
};

const onSingleFileDelete = async (data, io) => {
  try {
    const user = findUser(data.token);

    // send the updated file with index to client
    const index = data.index;
    io.in(user.id).emit("deleteSingleFile", index);

    // delete from mongo and s3
    await deleteOneFile(data.file, data.token);
  } catch (error) {
    console.log(`Delete single file error: ${error}`);
  }
};

const deleteOneFile = async (file, token) => {
  const user = findUser(token);
  const fileID = file._id ? file._id : file.id;
  await User.updateOne({ _id: user.id }, { $pull: { files: { _id: fileID } } });

  if (!file.isMongoFile) {
    await awsDeleteSingleFile(file.amazonName);
  }
};

const clearFiles = async (data, io) => {
  try {
    for (let i = 0; i < data.files.length; i++) {
      if (!data.files[i].isLocked) {
        await deleteOneFile(data.files[i], data.token);
      }
    }

    const user = findUser(data.token);
    io.in(user.id).emit("clearedFiles");
  } catch (error) {
    console.log(`Clearing files error: ${error}`);
  }
};

const getAllUsers = async (socket) => {
  try {
    const users = await User.find({}, { username: 1, _id: 1 });
    socket.emit("allUsers", users);
  } catch (error) {
    console.log(`Getting all users error: ${error}`);
  }
};

const sendNoteNotifications = async (io, data) => {
  try {
    const user = findUser(data.token);

    data.users.forEach(async (shareUser) => {
      let currentUser = await User.findById(shareUser._id);

      if (currentUser.notifications.some((notif) => notif.ID.equals(data.refID))) {
        return;
      }

      const newID = new ObjectId();
      currentUser.notifications.push({
        _id: newID,
        type: "Note",
        refID: data.refID,
        name: data.name,
        from: user.username,
      });
      await currentUser.save();

      io.in(shareUser._id).emit("newNotifications", currentUser.notifications);
    });
  } catch (error) {
    console.log(`sendNoteNotifications error: ${error}`);
  }
};

const removeNotification = async (io, data, socket) => {
  try {
    const user = findUser(data.token);
    socket.join(user.id);
    let currentUser = await User.findById(user.id);

    currentUser.notifications.forEach((notif, index) => {
      if (notif._id.equals(data.notifID)) {
        currentUser.notifications.splice(index, 1);
      }
    });
    await currentUser.save();

    io.in(user.id).emit("newNotifications", currentUser.notifications);
  } catch (error) {
    console.log(`removeNotification error: ${error}`);
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
