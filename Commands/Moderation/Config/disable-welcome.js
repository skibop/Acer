const Discord = require("discord.js");
const db = require("../../../Schema/welcome-schema");

module.exports = {
  commands: "disablewelcome",
  permissinons: "MANAGE_GUILD",
  permissionError: "You do not have permissoins to disable welcome channel's!",
  run: async (message, args, text, client) => {
    db.findOne({ GuildID: message.guild.id }, async (err, data) => {
      if (data) {
        data.delete();
        message.channel.send("Welcome's have been disabled!");
      } else {
        message.channel.send("There are no welcome channels in this server!");
      }
    });
  },
};
