const Discord = require("discord.js");

module.exports = {
  commands: "lock",
  cooldown: 2,
  permissions: "MANAGE_MESSAGES",
  permissionError: "You do not have permissions to lock channels!",
  run: async (message, args, text, client) => {
    let channel =
      message.mentions.channels.first() ||
      message.channel ||
      client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]);
    if (!channel) return message.reply("Please specify a channel!");

    let guild = message.guild;

    let role = guild.roles.everyone;

    const embed = new Discord.MessageEmbed()
      .setDescription(`This channel has been locked!`)
      .setTimestamp()
      .setColor("#231F20");
    channel.updateOverwrite(role, {
      SEND_MESSAGES: false,
    });

    await channel.send(embed);
  },
};
