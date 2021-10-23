const { MessageEmbed } = require("discord.js");
const logChannel = "868243403543023616";

module.exports = {
  commands: ["reportbug", "bug"],
  cooldown: 10,
  run: async (message, args, text, client) => {
    const user = message.author.username;
    const content = args.slice(0).join(" ");
    if (!content)
      return message.channel.send("Please provide the bug to report!");

    message.channel.send("Your report has been sent to the owner!");

    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .addFields({
        name: "New Bug!",
        value: `Bug: ${content}`,
      })
      .setAuthor(user);
    client.channels.cache.get(logChannel).send(embed);
  },
};
