const express = require("express");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

const messages = [
  { text: "text_1", owner: "owner_1" },
  { text: "text_2", owner: "owner_2" },
  { text: "text_3", owner: "owner_3" }
];

var api = express.Router();

api.get("/messages", (req, res) => {
  res.send(messages);
});

api.post("/messages", (req, res) => {
  console.log("message added");
  messages.push(req.body);
  //res.sendStatus(200);
  res.send(req.body);
});

app.use("/api", api);
app.use(errorHandler());
app.listen(3000);
