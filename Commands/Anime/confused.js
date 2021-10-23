const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "confused",
  run: async (message, args, text, client) => {
    let cONfUSed = await anime.confused();
    const confused = new Discord.MessageEmbed()
      .setImage(cONfUSed)
      .setTimestamp()
      .setColor("RED")
      .setTitle(`${message.author.username} is confused!`);

    message.channel.send(confused);
  },
};
