const mongoose = require("mongoose");

function connectToDataBase() {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const db = mongoose.connection;

db.on("error ", (error) => console.log("error", error));

db.once("open", () => console.log("Database connected at mongo:"));

module.exports = connectToDataBase;