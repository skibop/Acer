const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "bite",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please specify someone to bite!");
    let bite = await anime.bite();
    const bitey = new Discord.MessageEmbed()
      .setImage(bite)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} bit ${user.user.username}`);

    message.channel.send(bitey);
  },
};
