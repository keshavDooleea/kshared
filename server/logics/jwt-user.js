const jwt = require("jsonwebtoken");

const findUser = (data) => {
  let decodedUser = jwt.verify(data, process.env.JWT_TOKEN);
  const user = {};

  user.username = decodedUser.username;
  user.token = data;
  user.id = decodedUser._id;
  user.dateAccCreated = decodedUser.dateAccCreated;

  return user;
};

module.exports = findUser;
