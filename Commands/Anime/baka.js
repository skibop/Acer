const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "baka",
  run: async (message, args, text, client) => {
    let baka = await anime.baka();
    const bruh = new Discord.MessageEmbed()
      .setImage(baka)
      .setTimestamp()
      .setColor("RED");

    message.channel.send(bruh);
  },
};
