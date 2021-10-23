const client = require("../index");
const Discord = require("discord.js");
const logChannel = "867933515281489922";
const Data1 = require("../Schema/autorole-schema");
const Data2 = require("../Schema/command-prefix-schema");
const Data3 = require("../Schema/goodbye-schema");
const Data4 = require("../Schema/logs-schema");
const Data5 = require("../Schema/mute-schema");
const Data6 = require("../Schema/warn-schema");
const Data7 = require("../Schema/welcome-schema");

client.on("guildDelete", async (guild) => {
  const uc = client.guilds.cache
    .reduce((a, g) => a + g.memberCount, 0)
    .toLocaleString();
  client.user.setPresence({
    activity: {
      name: `${uc} || @Acer`,
      type: "WATCHING",
    },
    status: "dnd",
  });

  const skrt = new Discord.MessageEmbed()
    .setTitle("Server Removed!")
    .addField("Guild Info!", `${guild.name} (${guild.id})`)
    .addField("Owner Info", `${guild.owner}`)
    .addField("Members!", `${guild.memberCount} members!`)
    .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
    .setTimestamp()
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor("#36393f");
  client.channels.cache.get(logChannel).send(skrt);

  await Data1.findOneAndDelete({ GuildID: guild.id });
  await Data2.findOneAndDelete({ _id: guild.id });
  await Data3.findOneAndDelete({ GuildID: guild.id });
  await Data4.findOneAndReplace({ guildID: guild.id });
  await Data5.findOneAndDelete({ Guild: guild.id });
  await Data6.findOneAndDelete({ GuildID: guild.id });
  await Data7.findOneAndDelete({ GuildID: guild.id });
});
