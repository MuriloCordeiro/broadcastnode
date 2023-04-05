const mongoose = require("mongoose");

const messageScheema = new mongoose.Schema({
  _id: {
    type: String,
    required: false,
  },
  receiver: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    required: true,
    default: 1000,
  },
  message: {
    text: { type: String, required: true}
  },
});

module.exports = mongoose.model("Message", messageScheema);