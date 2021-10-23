const { Schema, model } = require("mongoose");

module.exports = model(
  "Muted-Members",
  new Schema({
    Guild: String,
    Users: Array,
  })
);
