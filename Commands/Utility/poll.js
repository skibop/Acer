const Discord = require("discord.js");

module.exports = {
  commands: "poll",
  permissions: ["MANAGE_GUILD", "ADMINISTRATOR"],
  cooldown: 2,
  run: async (message, args, text, client) => {
    let channel = message.mentions.channels.first() || message.channel;
    if (!channel) return message.reply("Please specify a channel!");

    if (args.length <= 0)
      return message.reply(`Please type something to poll!`);

    const embed = new Discord.MessageEmbed()
      .setTitle("New Poll Launched!")
      .setDescription(args.join(" "))
      .setFooter(
        `Poll made by ${message.member.displayName}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor("#231F20");

    let msgEmbed = await channel.send(embed);
    await msgEmbed.react("👍");
    await msgEmbed.react("👎");
  },
};
