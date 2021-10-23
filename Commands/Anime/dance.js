const anime = require("anime-actions");
const Discord = require("discord.js");

module.exports = {
  commands: "dance",
  run: async (message, args, text, client) => {
    let dance = await anime.dance();
    const dancE = new Discord.MessageEmbed()
      .setImage(dance)
      .setTimestamp()
      .setColor("RED");

    message.channel.send(dancE);
  },
};
