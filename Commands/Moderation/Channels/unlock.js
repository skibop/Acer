const Discord = require("discord.js");

module.exports = {
  commands: "unlock",
  cooldown: 2,
  permissions: "MANAGE_MESSAGES",
  permissionError: "You dont have permissions to unlock channels!",
  run: async (message) => {
    let channel =
      message.mentions.channels.first() ||
      message.channel ||
      client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]);
    if (!channel) return message.reply("Please specify a channel!");

    let guild = message.guild;

    let role = guild.roles.everyone;

    let embed = new Discord.MessageEmbed()
      .setDescription(`This channel has been unlocked!`)
      .setTimestamp()
      .setColor("#231F20");
    channel.updateOverwrite(role, {
      SEND_MESSAGES: true,
    });
    try {
      await channel.send(embed);
    } catch (err) {
      console.log(err);
      message.channel.send("Something went wrong");
    }
  },
};
