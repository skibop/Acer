const db = require("../../../Schema/welcome-schema");

module.exports = {
  commands: ["setwelcome"],
  run: async (message, args, text, client) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.reply("You do not have the permission `MANAGE_GUILD`");
    let channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);

    if (!channel) return message.reply("Please mention a valid channel!");

    db.findOne({ GuildID: message.guild.id }, async (err, data) => {
      if (!data) {
        new db({
          GuildID: message.guild.id,
          WelcomeID: channel.id || channel,
        }).save();
        message.channel.send(`Welcome has been set!`);
      } else {
        await db.updateOne(
          { GuildID: message.guild.id },
          { $set: { WelcomeID: channel.id || channel } },
          { new: true }
        );
        message.channel.send("Welcome has been updated!");
      }
    });
  },
};
