const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "bonk",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please specify someone to bonk!");

    let bonk = await anime.bonk();
    const bonky = new Discord.MessageEmbed()
      .setImage(bonk)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} bonked ${user.user.username}`);

    message.channel.send(bonky);
  },
};
