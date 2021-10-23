const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: "ban",
  run: async (message, args, text, client) => {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setDescription(
            "**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**"
          )
      );

    let banMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    if (!banMember) {
      return message.channel.send(`That user is not in this guild.`);
    }
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No Reason Provided";

    if (!message.guild.me.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"]))
      return message.reply(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setDescription("I dont have the permissions to ban users!")
      );

    let Sembed = new MessageEmbed()
      .setColor("RED")
      .setAuthor(banMember.user.tag)
      .setThumbnail(banMember.user.displayAvatarURL())
      .setDescription(
        `> You've been banned from ${message.guild.name} because of ${reason}. You are permanently banned.`
      );
    let i = 0;
    banMember.send(Sembed).catch((err) => console.log(err.toString().red));
    banMember
      .ban(banMember, reason)
      .catch((err) => {
        console.log(err.toString().red);
        i++;
      })
      .then(() => {
        let embed = new MessageEmbed()
          .setColor("RED")
          .setAuthor(banMember.user.tag)
          .setThumbnail(banMember.user.displayAvatarURL())
          .setDescription(`✅ **${banMember.user.tag}** successfully banned!`);
        if (i == 1) return message.reply("MISSING PERMISSIONS TO BAN HIM!");
        message.reply(embed);
      });
  },
};
