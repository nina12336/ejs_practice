const express = require("express");
const app = express();
const ejs = require("ejs");
const { static } = require("express");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("person.ejs", { name });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
