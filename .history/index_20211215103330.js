const express = require("express");
const morgan = require("morgan");
const users = require("./data/users");

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Techries Ghana api for all users");
});

app.get("/users", (req, res) => {
  res.status(202).json({
    status: "success",
    data: users,
  });
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({
    message: "User has been created",
    data: user,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
