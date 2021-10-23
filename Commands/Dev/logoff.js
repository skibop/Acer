const Discord = require("discord.js")

module.exports = {
    commands: ["logoff", "off", "shutdown"],
    run: async (message) => {
        if(message.author.id !== '737069109484847174') return;
        
        await message.channel.send(`Bot is now turning off!`)
        process.exit()
    }
}