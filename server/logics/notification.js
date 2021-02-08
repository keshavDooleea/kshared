const findUser = require("./jwt-user");
const User = require("../modals/user").User;
const mongo = require("mongoose");
const ObjectId = mongo.Types.ObjectId;

const sendNoteNotifications = async (io, data) => {
  try {
    const user = findUser(data.token);

    data.users.forEach(async (shareUser) => {
      let currentUser = await User.findById(shareUser._id);

      if (currentUser.notifications.some((notif) => notif.refID.equals(data.refID))) {
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
      io.in(shareUser._id).emit("getNotes", currentUser.notes);
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

module.exports = { sendNoteNotifications, removeNotification, acceptNotification };
