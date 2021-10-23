const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "cuddle",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send("Please specify someone to cuddle with!");
    let cuddle = await anime.cuddle();
    const cuddlY = new Discord.MessageEmbed()
      .setImage(cuddle)
      .setTimestamp()
      .setColor("RED")
      .setTitle(
        `${message.author.username} cuddled with ${user.user.username}`
      );

    message.channel.send(cuddlY);
  },
};
