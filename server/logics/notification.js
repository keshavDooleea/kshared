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
        saveNotification("Note", currentUser, data);
        io.in(shareUser._id).emit("getNotes", currentUser.notes);
      } else {
        saveNotification("File", currentUser, data);
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
        currentUser.notifications.splice(index, 1);
      }
    });
    await currentUser.save();

    io.in(user.id).emit("newNotifications", currentUser.notifications);
    io.in(user.id).emit("getNotes", currentUser.notes);
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

    if (data.type === "Note") {
      // search for notif item in sender db
      const dbSender = await User.findById({ _id: sender[0]._id });

      // check if note already exsists
      if (currentUser.notes.some((note) => note._id.equals(data.refID))) {
        removeNotification(io, data, socket);
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
    }

    // remove item from notif
    currentUser.notifications.forEach((notif, index) => {
      if (notif._id.equals(data.notifID)) {
        currentUser.notifications.splice(index, 1);
      }
    });

    await currentUser.save();
    io.in(user.id).emit("newNotifications", currentUser.notifications);
    io.in(user.id).emit("getNotes", currentUser.notes);
  } catch (error) {
    console.log(`acceptNotification error: ${error}`);
  }
};

module.exports = { sendNotifications, removeNotification, acceptNotification };
