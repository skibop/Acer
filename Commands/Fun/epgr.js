const Discord = require("discord.js")

module.exports = {
    commands: ["epgr", "epic gamer rate", "epic gamer"],
    cooldown: 1,
    run: (message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const epgr = Math.floor(Math.random() * 101)

        if(!user)
        return message.reply("Provide a valid user, please!")

        const embed = new Discord.MessageEmbed()
        .setTitle("Epic Gamer Rate Machine!")
        .setDescription(`${user} is ${epgr}% epic gamer!`)
        .setTimestamp()
        .setColor("#231F20")      


        message.channel.send(embed)
    }
}