const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "hug",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please specify someone to hug!");
    let huGEr = await anime.hug();
    const hug = new Discord.MessageEmbed()
      .setImage(huGEr)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} hugged ${user.user.username}`);

    message.channel.send(hug);
  },
};
