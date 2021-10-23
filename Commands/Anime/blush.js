const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "blush",
  run: async (message, args, text, client) => {
    let blushImage = await anime.blush();
    const blush = new Discord.MessageEmbed()
      .setImage(blushImage)
      .setTimestamp()
      .setColor("RED");

    message.channel.send(blush);
  },
};
