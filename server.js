const express = require("express");
const app = express();

const port = 3000;

app.get("/hello", (req, res) => {
  const name = req.query.name || "Hello World";
  res.send({ name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
