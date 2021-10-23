const Discord = require("discord.js")

module.exports = {
    commands: ["lesbianrate", "lesborate"],
    cooldown: 1,
    run: (message, args) => {
        const user =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const lesbianrate = Math.floor(Math.random() * 101)

        if(!user)
        return message.reply(` Provide a valid user from this guild !!`)

        const embed = new Discord.MessageEmbed()
        .setTitle(`Lesbian Rate Machine!`)
        .setDescription(`${user} is ${lesbianrate}% lesbian!`)
        .setTimestamp()
        .setColor("#231F20")      


        message.channel.send(embed)
    }
}