const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  commands: "showbans",
  permissions: "BAN_MEMBERS",
  permissionError:
    "You do not have permissions to see the bans of this server!",
  run: async (message, args, text, client) => {
    const fetchBans = message.guild.fetchBans();
    const bannedMembers = (await fetchBans)
      .map((member) => `\`${member.user.tag}\``)
      .join("\n");

    try {
      message.channel.send(
        new MessageEmbed()
          .setTitle(`List of banned users!`)
          .setDescription(bannedMembers)
          .setColor("BLUE")
      );
    } catch (e) {
      message.channel.send("Something went wrong..");
    }
  },
};
