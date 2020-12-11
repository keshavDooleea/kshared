require("dotenv").config();
const express = require("express");
const cors = require("cors");
const socketIo = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", async (socket) => {
  console.log("HELLO " + socket);
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
