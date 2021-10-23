const mongoose = require("mongoose");

const GoodbyeSchema = new mongoose.Schema({
  GuildID: {
    type: String,
    required: true,
  },
  GoodbyeID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Goodbye", GoodbyeSchema);
