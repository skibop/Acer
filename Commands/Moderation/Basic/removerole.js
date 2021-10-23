const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: "removerole",
  permissions: "MANAGE_ROLES",
  permissionError: "You do not have permission to manage roles!",
  run: async (message, args, text, client) => {
    let target =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );

    if (!target)
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setDescription("**I am unable to find the user**")
      );

    let rrole =
      message.mentions.roles.first() ||
      message.guild.roles.cache.get(args[0]) ||
      message.guild.roles.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );

    if (!rrole)
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setDescription("**I am unable to find the role**")
      );

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${rrole} role removed from ${target}`)
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp();

    await message.channel.send(embed);

    target.roles.remove(rrole);
  },
};
