require("dotenv").config();

const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(port, () => {
  console.log(`backend started at http://localhost:${port}`);
});
const connectToDataBase = require("./database");
connectToDataBase();

// teste;
