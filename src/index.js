const express = require("express");
const app = express();
const port = 3005;
app.get("/", (req, res) => {
  res.send("<h1> 202001543 Incheon National University !!</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
