const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: "reset-nick",
  run: async (message, args, text, client) => {
    const perms = ["MANAGE_NICKNAMES" || "ADMINSTRATOR"];
    const user = message.mentions.members.first();
    if (!user) return message.reply("Please specify a member!");

    if (!message.member.permissions.has(perms))
      return message
        .reply(
          `You do not have the permission to do that lol try asking a staff to give you the permission **\`MANAGE_NICKNAMES\`** or **\`ADMINISTRATOR\`**`
        )
        .then((msg) => {
          msg.delete({ timeout: 20000 });
        });

    try {
      user.setNickname(null);
      message.reply(
        new MessageEmbed()
          .setTitle("Nickname Reseted!")
          .setDescription(
            `✅ <@${user.id}> (\`${user.user.tag}\`) nickname has been successfully Reseted !!`
          )
          .addField(
            "Changed By",
            `<@${message.member.id}>\n(\`${message.member.user.tag}\`)`,
            true
          )
          .addField(
            "Changed User",
            `<@${user.id}>\n(\`${user.user.tag}\`)`,
            true
          )
          .setTimestamp()
          .setColor("RED")
      );
    } catch (err) {
      message.reply(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setThumbnail(user.user.displayAvatarURL())
          .setDescription(
            "I do not have permission to reset " +
              user.toString() +
              " nickname!"
          )
      );
    }
  },
};
