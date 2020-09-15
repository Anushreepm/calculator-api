const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const calculationRoutes = require("./Routes/calculationRoutes");
const port = 3000;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});
// your code goes here

app.use("/", calculationRoutes);

// here

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
