const mongoose = require("mongoose");

const autorole = new mongoose.Schema({
  GuildID: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("autorole", autorole);
