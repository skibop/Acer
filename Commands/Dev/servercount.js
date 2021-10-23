const Discord = require("discord.js")
const ascii = require("ascii-table")

let Table = new ascii("ServerList");
Table.setHeading(" Guild Name ", " Guild ID ", " Member Count ");

module.exports = {
    commands: ["servercount", "sc"],
    run: async (message, args, text, client, guild) => {
        if(message.author.id !== '737069109484847174') return;

        const servers = message.client.guilds.cache.array().map(guild => {
            Table.addRow( guild.name, guild.id , ` ${guild.memberCount} Users `);
        });

        console.log(Table.toString());
        await message.channel.send(`All the servers and details have been posted in console`)
    }
}   