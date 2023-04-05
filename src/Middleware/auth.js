const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;
const payload = process.env.API_PAYLOAD;
const token = jwt.sign(payload, secretKey);

module.exports = {
  async validateRoutes(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === `Bearer ${token}`) {
      next();
      console.log("token", token);
    } else {
      res.status(403).json({ statusCode: 403, error: "Autorização negada" });
    }
  },
};