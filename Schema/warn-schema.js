const mongoose = require("mongoose");

const WarnSchema = new mongoose.Schema({
  guildid: String,
  user: String,
  content: Array,
});

module.exports = mongoose.model("warns", WarnSchema);
