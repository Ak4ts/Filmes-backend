const mongoose = require("mongoose")

const filmsSchema = new mongoose.Schema({
  
  filmName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  alreadySeen: {
    type: Boolean,
    default: false,
  },
  groupID: {
    type: String,
    default: "Maia&Luiz",
  },
});

module.exports = mongoose.model("Films", filmsSchema)