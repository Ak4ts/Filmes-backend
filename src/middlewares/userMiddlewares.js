const { validate: isUuid } = require("uuid");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken")
const authConfig = require("../configs/auth.js")

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
      return response.status(400).json({ error: "Invalid ID" });
    }

    try {
      const user = await Users.findById(id);
      response.user = user;
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }

    next();
  },
};