const Discord = require("discord.js")

module.exports = {
    commands: "servericon",
    cooldown: 2,
    run: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()

        .setTitle(`${message.guild.name}'s Icon!`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#231F20")      

        message.channel.send(embed)
    }
}