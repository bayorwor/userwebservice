const express = require("express");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));
