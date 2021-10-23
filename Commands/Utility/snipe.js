const Discord = require("discord.js");

module.exports = {
  commands: ["snipe", "expose"],
  run: async (message, args, text, client) => {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.reply("There is nothing to snipe!");

    const embed = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription(msg.content)
      .setColor("RANDOM")
      .setImage(msg.image);

    message.channel.send(embed);
  },
};
