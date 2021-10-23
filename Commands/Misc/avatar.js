const Discord = require("discord.js");

module.exports = {
  commands: ["avatar"],
  cooldown: 1,
  run: (message, args) => {
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    const embed = new Discord.MessageEmbed()
      .setTitle(`${member.displayName}'s Avatar`)
      .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setFooter(
        "Requested by " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor("#231F20");
    message.channel.send(embed);
  },
};
