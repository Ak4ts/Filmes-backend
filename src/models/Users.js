const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  group:{
    groupName: {
      type: String,
      default: false
    },
    groupID:{
      type: String,
      default: false
    }
  },
  token:{
    type: String,
    default: false
  }
});

module.exports = mongoose.model("Users", usersSchema);