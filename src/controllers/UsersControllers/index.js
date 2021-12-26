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
  async login(request, response) {
    const { email, password } = request.body;
    const user = await Users.findOne({ email }).select("+password");

    if (!user || !password === user.password)
      return response.status(400).json({ error: "Email or password could be wrong" });

    user.token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 2629800,
    });
    user.save();
    return response.status(200).json({ user });
  },
  async findByToken(request, response) {
    try {
      const { cookie } = request.params
      const users = await Users.findOne({ cookie });
      return response.status(200).json({ users });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  async getUser(request, response){
    try{
      const { cookie } = request.params;
      const user = await Users.findOne({ token: cookie });
      return response.status(200).json({ user });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
};
