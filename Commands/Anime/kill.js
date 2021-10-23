const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "kill",
  run: async (message, args, text, client) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send("Please specify someone you want to kill!");
    let kILL = await anime.kill();
    const kill = new Discord.MessageEmbed()
      .setImage(kILL)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} killed ${user.user.username}`);

    message.channel.send(kill);
  },
};
