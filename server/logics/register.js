const User = require("../modals/user").User;
const wrapResponse = require("./wrap-response");

const eventName = "registrationResponse";
const errorMessage = "Sorry, an error has occured!";

const registerUser = async (registerForm, socket) => {
  await User.findOne({ username: { $regex: `^${registerForm.username}$`, $options: "i" } }, async (err, user) => {
    if (err) {
      console.log("Register User DB ERROR: ", err);
      socket.emit(eventName, wrapResponse(500, errorMessage));
    }

    // no user found
    if (user == null) {
      try {
        const newUser = new User({
          username: registerForm.username,
          password: registerForm.password,
          notes: getWelcomeNote(registerForm.username),
        });

        await newUser.save();
        const message = "Your account has been registered!";
        socket.emit(eventName, wrapResponse(200, message));
      } catch (err) {
        console.log("Register User DB save ERROR: ", err);
        socket.emit(eventName, wrapResponse(500, errorMessage));
      }
    }

    // user exists in db
    else {
      const message = "This Username is taken";
      socket.emit(eventName, wrapResponse(204, message));
    }
  });
};

const getWelcomeNote = (name) => {
  return {
    date: new Date(),
    canShow: true,
    welcomeNote: true,
    text: `Helloo ${name}! Click Me 😉

On this pannel, you can write and save some notes!

On the right pannel, you can write things, copy & paste link and stuff there..

Transfer and download your files quickly via the bottom pannel.

Don't forget to rate the app on the sidebar to the left! 💖`,
  };
};

module.exports = registerUser;
