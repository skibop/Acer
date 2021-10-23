const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "wink",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send("Please specify someone to wink at!");
    let wInK = await anime.wink();
    const wink = new Discord.MessageEmbed()
      .setImage(wInK)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} winked at ${user.user.username}`);

    message.channel.send(wink);
  },
};
