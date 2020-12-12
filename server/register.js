const User = require("./modals/user").User;
const eventName = "registrationResponse";

const registerUser = async (registerForm, socket) => {
  await User.findOne({ username: registerForm.username }, async (err, user) => {
    if (err) {
      socket.emit(eventName, "Error");
    }

    // no user found
    if (user == null) {
      try {
        const newUser = new User({
          username: registerForm.username,
          password: registerForm.password,
        });

        await newUser.save();
        socket.emit(eventName, "Registered");
      } catch (err) {
        socket.emit(eventName, "Error");
      }
    }

    // user exists in db
    else {
      socket.emit(eventName, "Exists");
    }
  });
};

module.exports = registerUser;
