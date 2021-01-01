const User = require("../modals/user").User;

const getDashboardData = async (socket) => {
  const documents = await User.find({}, { "files.base64": 0 });

  const content = {
    users: [],
    notesLength: 0,
    files: {
      mongoLength: 0,
      amazonLength: 0,
      totalLength: 0,
      totalSize: 0,
    },
  };

  documents.forEach((doc) => {
    let currentSize = 0;

    // each file
    doc.files.forEach((file) => {
      content.files.totalSize += file.size;
      currentSize += file.size;
      content.files.totalLength++;
      file.isMongoFile ? content.files.mongoLength++ : content.files.amazonLength++;
    });

    // username + file size for individuals
    content.users.push({
      username: doc.username,
      stars: doc.stars,
      notes: doc.notes.length,
      files: doc.files.length,
      fileSize: formatBytes(currentSize),
    });

    // other facts
    content.notesLength += doc.notes.length;
  });

  content.files.totalSize = formatBytes(content.files.totalSize);
  socket.emit("dashboardData", JSON.stringify(content));
};

const formatBytes = (bytes) => {
  const decimals = 2;

  if (bytes === 0) {
    return "0 Bytes";
  }

  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

module.exports = getDashboardData;
