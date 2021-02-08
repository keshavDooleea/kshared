const User = require("../modals/user").User;
const jwt = require("jsonwebtoken");
const wrapResponse = require("./wrap-response");

const eventName = "newLoginResponse";
const errorMessage = "Sorry, an error has occured!";

const userLogin = async (loginForm, socket) => {
  await User.findOne({ username: loginForm.username }, (err, user) => {
    if (err) {
      socket.emit(eventName, wrapResponse(500, errorMessage));
    }

    // user not found
    if (user == null) {
      const message = "User not found";
      socket.emit(eventName, wrapResponse(205, message));
    }
    // user found
    else {
      // verify password
      User.findOne({ username: loginForm.username, password: loginForm.password }, async (err, userFound) => {
        // incorrect password
        if (userFound == null) {
          const message = "Password is incorrect";
          socket.emit(eventName, wrapResponse(206, message));
        }
        // user found
        else {
          socket.join(userFound._id);
          console.log(`${userFound.username} joined the server`);

          const loggedUser = {
            _id: userFound._id,
            username: userFound.username,
            password: userFound.password,
            dateAccCreated: userFound.dateAccCreated,
          };

          // generate jwt token
          let token = jwt.sign(loggedUser, process.env.JWT_TOKEN, {});

          const response = {
            status: 200,
            token: token,
            username: loggedUser.username,
            message: "Signed in",
            id: userFound._id,
            dateAccCreated: userFound.dateAccCreated,
            currentText: userFound.currentText,
            noteList: userFound.notes,
            stars: userFound.stars,
            files: userFound.files,
            notifications: userFound.notifications,
          };

          socket.emit(eventName, response);
          return token;
        }
      });
    }
  });
};

module.exports = userLogin;
