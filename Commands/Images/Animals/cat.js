const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: "cat",
  cooldown: 1,
  run: async (message) => {
    const res = await fetch("https://some-random-api.ml/img/cat");
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
      .setTitle(`A cat!`)
      .setImage(img)
      .setFooter(
        `Requested ${message.member.displayName}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor("#231F20");
    try {
      message.channel.send(embed);
    } catch (e) {
      console.log(e);
      message.channel.send(`Something went wrong!`);
    }
  },
};
