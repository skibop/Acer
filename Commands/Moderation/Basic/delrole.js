const Discord = require("discord.js");

module.exports = {
  commands: "delrole",
  permissions: "MANAGE_GUILD",
  permissionError: "You do not have permissions to delete roles!",
  run: async (message, args, text, client) => {
    let role =
      message.mentions.roles.first() ||
      message.guild.roles.cache.get(args[0]) ||
      message.guild.roles.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );

    if (!role) return message.channel.send("Please specify a role to delete");
    role.delete();

    message.channel.send("Role Deleted!");
  },
};
