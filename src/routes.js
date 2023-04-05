const express = require("express");
const routes = express.Router();
const MessageController = require("./Controllers/MessageController.js");
const UserController = require("./Controllers/UserController.js");
const authMiddleware = require("./Middleware/auth.js");

// routes.get("/", (request, response) => response.send("Hello World"));

routes.get("/user",  authMiddleware.validateRoutes, UserController.GetUser);

routes.post("/user", authMiddleware.validateRoutes, UserController.PostUser);

routes.get("/message",  authMiddleware.validateRoutes, MessageController.GetMessages);

routes.post("/message", authMiddleware.validateRoutes, MessageController.SendMessage);

// routes.get("/auth", authMiddleware.validateRoutes);

module.exports = routes;