const mongoose = require("mongoose");

const WelcomeSchema = new mongoose.Schema({
  GuildID: {
    type: String,
    required: true,
  },
  WelcomeID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Welcomes", WelcomeSchema);
