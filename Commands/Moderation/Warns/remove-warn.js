const db = require("../../../Schema/warn-schema");

module.exports = {
  commands: ["remove-warn", "removewarn", "delete-warn"],
  permissions: ["ADMINISTRATOR", "MANAGE_GUILD"],
  permissionError: "You do not have permimssions to remove warns from users!",
  cooldown: 2,
  run: async (message, args) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    if (!user) return message.channel.send("User not found.");
    db.findOne(
      { guildid: message.guild.id, user: user.user.id },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          let number = parseInt(args[1]) - 1;
          data.content.splice(number, 1);
          message.channel.send("Warn has been deleted from user!");
          data.save();
        } else {
          message.channel.send(
            "This user does not have any warns in this server!"
          );
        }
      }
    );
  },
};
