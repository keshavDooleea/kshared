const findUser = require("./jwt-user");
const User = require("../modals/user").User;
const mongo = require("mongoose");
const ObjectId = mongo.Types.ObjectId;

const saveNotification = async (type, currentUser, data) => {
  const user = findUser(data.token);

  const newNotification = {
    _id: new ObjectId(),
    type,
    refID: data.refID,
    name: data.name,
    from: user.username,
  };

  if (type === "File") {
    newNotification.size = data.size;
    newNotification.innerHTML = data.innerHTML;
  }

  currentUser.notifications.push(newNotification);
  await currentUser.save();
};

const sendNotifications = async (io, data) => {
  try {
    data.users.forEach(async (shareUser) => {
      let currentUser = await User.findById(shareUser._id);

      // prevent sending duplicate
      if (currentUser.notifications.some((notif) => notif.refID.equals(data.refID))) {
        return;
      }

      if (data.isNote) {
        await saveNotification("Note", currentUser, data);
        io.in(shareUser._id).emit("getNotes", currentUser.notes);
      } else {
        await saveNotification("File", currentUser, data);
      }

      io.in(shareUser._id).emit("newNotifications", currentUser.notifications);
    });
  } catch (error) {
    console.log(`sendNotifications error: ${error}`);
  }
};

const removeNotification = async (io, data, socket) => {
  try {
    const user = findUser(data.token);
    socket.join(user.id);
    let currentUser = await User.findById(user.id);

    currentUser.notifications.forEach((notif, index) => {
      if (notif._id.equals(data.notifID)) {
        if (notif.type === "Note") {
          io.in(user.id).emit("getNotes", currentUser.notes);
        }
        currentUser.notifications.splice(index, 1);
      }
    });
    await currentUser.save();

    io.in(user.id).emit("newNotifications", currentUser.notifications);
  } catch (error) {
    console.log(`removeNotification error: ${error}`);
  }
};

const acceptNotification = async (io, data, socket) => {
  try {
    const user = findUser(data.token);
    socket.join(user.id);
    let currentUser = await User.findById(user.id);

    // get note from sender
    const sender = await User.find({ username: data.from }, { _id: 1 });
    const dbSender = await User.findById({ _id: sender[0]._id });

    if (data.type === "Note") {
      // check if note already exsists
      if (currentUser.notes.some((curNote) => curNote._id.equals(data.refID))) {
        await removeNotification(io, data, socket);
        return;
      }

      dbSender.notes.forEach((note) => {
        // found current note
        if (note._id.equals(data.refID)) {
          currentUser.notes.push(note);
        }
      });

      currentUser.notes.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      io.in(user.id).emit("getNotes", currentUser.notes);
    } else {
      if (currentUser.files.some((file) => file._id.equals(data.refID))) {
        await removeNotification(io, data, socket);
        return;
      }

      dbSender.files.forEach((file) => {
        // found current note
        if (file._id.equals(data.refID)) {
          currentUser.files.push(file);
          io.in(user.id).emit("uploadedFile", file);
        }
      });
    }

    // remove item from notif
    currentUser.notifications.forEach((notif, index) => {
      if (notif._id.equals(data.notifID)) {
        currentUser.notifications.splice(index, 1);
      }
    });

    await currentUser.save();
    io.in(user.id).emit("newNotifications", currentUser.notifications);
  } catch (error) {
    console.log(`acceptNotification error: ${error}`);
  }
};

module.exports = { sendNotifications, removeNotification, acceptNotification };
