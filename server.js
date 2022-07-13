const express = require("express");
const app = express();

const port = 8080;

app.get("/hello", (req, res) => {
  const name = req.query.name || "Hello World";
  res.send({ name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
