const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "punch",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please specify someone to punch!");
    let pUnCHy = await anime.punch();
    const punch = new Discord.MessageEmbed()
      .setImage(pUnCHy)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} punched ${user.user.username}`);

    message.channel.send(punch);
  },
};
