const client = require("../index");
const Discord = require("discord.js");
const logChannel = "867582784776306728";

client.on("guildCreate", (guild) => {
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

  const skibop = new Discord.MessageEmbed()
    .setTitle("Server Added!")
    .addField("Guild Info!", `${guild.name} (${guild.id})`)
    .addField("Owner Info", `${guild.owner} (${guild.owner.id})`)
    .addField("Members!", `${guild.memberCount} members!`)
    .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
    .setTimestamp()
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor("#36393f");
  client.channels.cache.get(logChannel).send(skibop);
});
