const Discord = require("discord.js");

module.exports = {
  commands: ["vote", "vo"],
  cooldown: 2,
  run: (message, args, text) => {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username)
      .setColor("#231F20")      
      .setFooter("Requested by " + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .addFields({
        name: "Voting Link",
        value: "[Vote For Me!](https://top.gg/bot/826119158097641474/vote)",
      });

      try {
        message.channel.send(embed);
      } catch(err) {
        console.log(err)
        message.channel.send("Something went wrong")
      }  
    },
};
