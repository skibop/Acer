const Discord = require("discord.js");

module.exports = {
  commands: "about",
  cooldown: 1,
  run: (message) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("About Acer!")
      .setColor("#231F20")
      .setTimestamp()
      .setFooter(
        "Requested by " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `Acer is a diverse multi-purpose bot with powerful moderation, quality music, image, fun, and giveaways! Acer is made with Javascript along with MongoDB to provide you with best high speed performance when it comes to heavy tasks. Acer is made by haxxd#0001`
      );
    message.channel.send(embed);
  },
};
