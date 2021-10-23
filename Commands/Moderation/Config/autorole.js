const db = require("../../../Schema/autorole-schema");

module.exports = {
  commands: ["autorole", "setautorole", "set-autorole"],
  permissinons: "MANAGE_ROLES",
  permissionError: "You do not have permissoins to set up auto-roles!",
  run: async (message, args, text, client) => {
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.channel.send(
        "I do not have the ``MANAGE_ROLES`` permission to give autoroles!"
      );

    let role =
      message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

    if (!role) return message.reply("Please mention a valid role!");

    db.findOne({ GuildID: message.guild.id }, async (err, data) => {
      if (!data) {
        new db({
          GuildID: message.guild.id,
          Role: role.id || role,
        }).save();
        message.channel.send(`Autorole has been set!`);
      } else {
        await db.updateOne(
          { GuildID: message.guild.id },
          { $set: { Role: role.id || role } },
          { new: true }
        );
        message.channel.send("Autorole has been updated!");
      }
    });
  },
};
