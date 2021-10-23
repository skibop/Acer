const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: "bird",
  cooldown: 1,
  run: async (message) => {
    const res = await fetch("http://shibe.online/api/birds");
    const img = (await res.json())[0];
    const embed = new Discord.MessageEmbed()
      .setTitle(`A Bird Picture! `)
      .setImage(img)
      .setFooter(
        message.member.displayName,
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
