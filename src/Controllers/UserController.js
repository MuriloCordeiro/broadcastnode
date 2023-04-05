const { response } = require("express");
const { v4: uuid } = require("uuid");
const User = require("../models/User");



module.exports = {
  async GetUser(req, response) {
    try {      
      const videos = await User.find();
      return response.status(200).json({ videos });
    } catch (errr) {
      response.status(500).json({ error: err.message });
    }
  },

  async PostUser(request, response) {
    const { name, middleName, age } = request.body;
    if (!name || !middleName || !age) {
      return response.status(400).json({ error: "Name, middlename or age  is missing" });
    }
    const user = new User({
      _id: uuid(),
      name,
      middleName,
      age
    });
    try {
    
      await user.save();
      return response.status(201).json({status: response.status, message: user});
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
}