const Discord = require("discord.js");

module.exports = {
  commands: "delchannel",
  permissions: "MANAGE_GUILD",
  permissionError: "You do not have permissions to delete channels!",
  run: async (message, args, text, client) => {
    const channel =
      message.mentions.channels.first() ||
      client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) ||
      message.guild.channels.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    if (!channel)
      return message.channel.send("Please specify a channel to delete");

    channel.delete();

    message.channel.send("Channel Deleted!");
  },
};
