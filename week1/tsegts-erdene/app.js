const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Docker testing ye");
});

const port = 3003;
const HOST = "0.0.0.0";

app.listen(port, HOST);
console.log(`Runing on ${port} ye`);
