module.exports = {
  commands: "unban",
  permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
  permissionError: "You do not have permissions to unban users!",
  cooldown: 2,
  run: async (message, args) => {
    const id = args[0];
    if (!id) return message.channel.send("Please send an ID!");

    const bannedMembers = await message.guild.fetchBans();
    if (!bannedMembers.find((user) => user.user.id === id))
      return message.channel.send("User is not banned!");

    message.guild.members.unban(id);
    message.reply("Unbanned User!");
  },
};
