const db = require("../../../Schema/warn-schema");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: "warn",
  permissions: ["ADMINISTRATOR", "MANAGE_GUILD"],
  permissionError: "You do not have permimssions to warn users!",
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
        if (!data) {
          data = new db({
            guildid: message.guild.id,
            user: user.user.id,
            content: [
              {
                moderator: message.author.id,
                reason: reason,
              },
            ],
          });
        } else {
          const obj = {
            moderator: message.author.id,
            reason: reason,
          };
          data.content.push(obj);
        }
        data.save();
      }
    );
    user.send(
      new MessageEmbed()
        .setDescription(`You have been warned for ${reason}`)
        .setColor("#231F20")
    );
    message.channel.send(
      new MessageEmbed()
        .setDescription(`Warned ${user} for ${reason}`)
        .setColor("#231F20")
    );
  },
};
