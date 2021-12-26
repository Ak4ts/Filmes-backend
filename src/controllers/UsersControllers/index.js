const Users = require("../../models/Users");
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const authConfig = require("../../configs/auth");

module.exports = {
  async register(request, response) {
    const { username, email, password, phone } = request.body;
    if ( !username || !password || !email || !phone ) {
      return response.status(400).json({ error: "Cannot continue with blank fields." });
    }

    const user = new Users({ _id: uuid(), username, email, password, phone });

    try {
      await user.save();
      return response.status(201).json({ message: "User created succesfully!!" });
    } catch (error) {
      response.status(400).json({ error: "Bad request" });
    }
  },
};
