const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "pat",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please specify someone to pat!");
    let pAtTy = await anime.pat();
    const pat = new Discord.MessageEmbed()
      .setImage(pAtTy)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} patted ${user.user.username}`);

    message.channel.send(pat);
  },
};
