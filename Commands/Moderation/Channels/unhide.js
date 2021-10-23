const Discord = require("discord.js");

module.exports = {
  commands: ["unhide", "view-unlock"],
  permissions: "MANAGE_MESSAGES",
  permissionError: "You do not have permissions to view-unlock channels!",
  cooldown: 2,
  run: async (message) => {
    let channel =
      message.mentions.channels.first() ||
      client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]);
    if (!channel) return message.reply("Please specify a channel!");

    let guild = message.guild;

    let role = guild.roles.everyone;

    let embed = new Discord.MessageEmbed()
      .setDescription(`This channel viewing has been unlocked!`)
      .setTimestamp()
      .setColor("#231F20");
    channel.updateOverwrite(role, {
      VIEW_CHANNEL: true,
    });
    try {
      await channel.send(embed);
    } catch (err) {
      console.log(err);
      message.channel.send("Something went wrong");
    }
  },
};
