const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: "fox",
  cooldown: 1,
  run: async (message) => {
    const res = await fetch("https://randomfox.ca/floof/");
    const img = (await res.json()).image;
    const embed = new Discord.MessageEmbed()
      .setTitle(`A Fox Picture!`)
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
