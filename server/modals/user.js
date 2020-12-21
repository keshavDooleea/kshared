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
  stars: {
    type: Number,
    default: 0,
    max: 5,
  },
  currentText: {
    type: String,
  },
  notes: [
    {
      text: { type: String },
      date: { type: Date },
      canShow: { type: Boolean },
      welcomeNote: { type: Boolean },
    },
  ],
  files: [
    {
      size: { type: Number },
      name: { type: String },
      amazonUrl: { type: String },
      amazonName: { type: String }, // userId + name
      innerHTML: { type: String },
      isLocked: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

var User = mongo.model("User", UserSchema);

module.exports = { User: User };
