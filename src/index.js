const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");

const app = express();
const port = 3001;

//HTTP logger
app.use(morgan("combined"));

//Template Engine
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.resolve(__dirname, "resources/views"));

//router
app.get("/", (req, res) => {
  res.render("home");
});

//http://localhost:3000/
app.listen(port, () => {
  console.log(`Express-handlebars example server listening on: ${port}`);
});
