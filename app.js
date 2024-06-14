const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Community listening on port ${port}`);
});

app.use(express.static("public"));

app.get(`/`, (req, res) => {
  res.render(`home`);
});
