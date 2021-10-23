const Discord = require("discord.js");
const Guild = require("../../../Schema/logs-schema");
const mongoose = require("mongoose");

module.exports = {
  commands: "disablelogs",
  permissions: ["MANAGE_GUILD", "ADMINISTRATOR"],
  permissionError: "You do not have permissions to set a welcome channel!",
  run: async (message, args, text, client) => {
    Guild.findOne({ guildID: message.guild.id }, async (err, data) => {
      if (data) {
        data.delete();
        message.channel.send("Logs disabled!");
      } else {
        message.channel.send("There are no logs in this server!");
      }
    });
  },
};
