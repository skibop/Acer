const Discord = require("discord.js");

module.exports = {
  commands: ["coinflip", "flip"],
  cooldown: 1,
  run: (message) => {
    const choices = ["heads", "tails"];
    const { member, mentions } = message;
    const tag = `<@${member.id}>`;
    const choice = choices[Math.floor(Math.random() * choices.length)];

    const embed = new Discord.MessageEmbed()
      .setTitle("CoinFlip")
      .setFooter("Requested by " + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#231F20")      
      .setAuthor(message.author.username)
      .setDescription(`You Flipped a ${choice} ${tag}`);

      message.channel.send(embed);

    },
};
