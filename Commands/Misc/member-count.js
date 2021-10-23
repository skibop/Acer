const Discord = require("discord.js");

module.exports = {
  commands: ["membercount", "mb"],
  cooldown: 5,
  run: (message) => {
    const { guild } = message;

    const { memberCount } = guild;

    const embed = new Discord.MessageEmbed()
      .setTitle(`Member Count!`)
      .setTimestamp()
      .setFooter("Alias - mb")
      .setColor("#231F20")
      .addFields({
        name: "Members",
        value: memberCount,
      });

    message.channel.send(embed);
  },
};
