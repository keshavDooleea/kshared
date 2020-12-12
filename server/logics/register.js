const User = require("../modals/user").User;
const wrapResponse = require("./wrap-response");

const eventName = "registrationResponse";
const errorMessage = "Sorry, an error has occured!";

const registerUser = async (registerForm, socket) => {
  await User.findOne({ username: registerForm.username }, async (err, user) => {
    if (err) {
      socket.emit(eventName, wrapResponse(500, errorMessage));
    }

    // no user found
    if (user == null) {
      try {
        const newUser = new User({
          username: registerForm.username,
          password: registerForm.password,
        });

        await newUser.save();
        const message = "Your account has been registered!";
        socket.emit(eventName, wrapResponse(200, message));
      } catch (err) {
        socket.emit(eventName, wrapResponse(500, errorMessage));
      }
    }

    // user exists in db
    else {
      const message = "This Username is taken";
      console.log("INN");
      socket.emit(eventName, wrapResponse(204, message));
    }
  });
};

module.exports = registerUser;
