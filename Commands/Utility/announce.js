const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: "announce",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  permissions: "MANAGE_MESSAGES",
  permissionError: "You do not have permissions to use the announce command!",
  cooldown: 2,
  run: async (message, args) => {
    let mention;
    let mention2;

    const Announceembed = new MessageEmbed()
      .setTimestamp()
      .setDescription("Usage: announce <#channel> <message> <-here/-everyone>")
      .setTitle("Announcement usage")
      .setColor("#231F20");

    if (!args.length) return message.channel.send(Announceembed);

    const channel = message.mentions.channels.first();
    if (!channel) return message.reply("Please specify a channel!");

    if (!args[1]) return message.reply("Please specify a message to announce");

    // mentions
    if (args.some((val) => val.toLowerCase() === "-everyone")) {
      for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase() === "-everyone") args.splice(i, 1);
      }

      mention = true;
    } else mention = false;

    // mentions
    if (args.some((val) => val.toLowerCase() === "-here")) {
      for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase() === "-here") args.splice(i, 1);
      }

      mention2 = true;
    } else mention2 = false;

    if (mention === true) channel.send("@everyone");
    if (mention2 === true) channel.send("@here");

    channel.send(
      new MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setDescription(args.slice(1).join(" "))
        .setTimestamp()
        .setColor("#231F20")
    );
  },
};
