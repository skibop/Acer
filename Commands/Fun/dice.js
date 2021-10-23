const Discord = require("discord.js")

module.exports = {
    commands: ["roll", "dice"],
    cooldown: 1,
    run: async (message, args) => {
        let limit = args[0];
        if (!limit) limit = 6;
    
        const result = Math.floor(Math.random() * limit + 1);
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`Dice Roll`)
          .setDescription(`${message.member} You rolled a die and you got **${result}**`)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("#231F20")      
          message.channel.send(embed);
        }
}