const db = require("../../../Schema/warn-schema");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: ["warns", "logs"],
  permissions: ["ADMINISTRATOR", "MANAGE_GUILD"],
  permissionError: "You do not have permimssions to check the warns of users!",
  cooldown: 2,
  /**
   *
   * @param {Message} message
   */
  run: async (message, args, text, client) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    if (!user) return message.channel.send("User not found.");
    const reason = args.slice(1).join(" ");
    db.findOne(
      { guildid: message.guild.id, user: user.user.id },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          message.channel.send(
            new MessageEmbed()
              .setTitle(`${user.user.tag}'s warns`)
              .setDescription(
                data.content.map(
                  (w, i) =>
                    `\`${i + 1}\` | Moderator : ${
                      message.guild.members.cache.get(w.moderator).user.tag
                    }\nReason : ${w.reason}`
                )
              )
              .setColor("#231F20")
          );
        } else {
          message.channel.send("User has no warns!");
        }
      }
    );
  },
};
