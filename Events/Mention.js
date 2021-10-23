const client = require("../index");
const Discord = require("discord.js");
const db = require("../Schema/command-prefix-schema");

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  const prefX = await db
    .findOne({
      _id: message.guild.id,
    })
    .catch((err) => console.log(err));

  if (prefX) {
    var PREFIX = prefX.prefix;
  } else if (!prefX) {
    PREFIX = "-";
  }

  const embed = new Discord.MessageEmbed()
    .setDescription(
      `My prefix in this server is \`${PREFIX}\`\n\nTo get a list of commands, type \`${PREFIX}help\``
    )
    .setColor("#231F20")
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setFooter("Vote Acer On Top.GG!");

  if (
    message.content === `<@!${client.user.id}>` ||
    message.content === `<@${client.user.id}>`
  ) {
    return message.channel.send(embed);
  }
});
