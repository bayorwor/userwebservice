const express = require("express");
const morgan = require("morgan");
const users = require("./data/users");

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Techries Ghana api for all users");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
