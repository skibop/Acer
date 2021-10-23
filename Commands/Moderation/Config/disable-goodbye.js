const Discord = require("discord.js");
const db = require("../../../Schema/goodbye-schema");

module.exports = {
  commands: "disablegoodbye",
  permissinons: "MANAGE_GUILD",
  permissionError: "You do not have permissoins to disable welcome channel's!",
  run: async (message, args, text, client) => {
    db.findOne({ GuildID: message.guild.id }, async (err, data) => {
      if (data) {
        data.delete();
        message.channel.send("Goodbye Messages's have been disabled!");
      } else {
        message.channel.send("There are no goodbye channel's in this server!");
      }
    });
  },
};
