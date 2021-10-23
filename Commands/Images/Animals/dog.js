const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: "dog",
  cooldown: 1,
  run: async (message) => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const img = (await res.json()).message;
    const embed = new Discord.MessageEmbed()
      .setTitle(`A Dog Picture!`)
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
