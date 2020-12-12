const mongo = require("mongoose");

const UserSchema = new mongo.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 10,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 10,
  },
  dateAccCreated: {
    type: Date,
    default: Date.now,
  },
  currentText: {
    type: String,
  },
  notes: [
    {
      text: { type: String },
      date: { type: Date },
      canShow: { type: Boolean },
    },
  ],
});

var User = mongo.model("User", UserSchema);

module.exports = { User: User };
