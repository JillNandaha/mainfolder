const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.get("/users", (req, res) => {
  res.json({ data: ["Jane", "Doe", "Man"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
