const Discord = require("discord.js");

module.exports = {
  commands: "say",
  cooldown: 2,
  run: async (message, args, text, client) => {
    const said = args.slice(0).join(" ");

    const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username)
      .setDescription(said)
      .setColor("BLUE")
      .setTimestamp();

    message.channel.send(embed);
  },
};
