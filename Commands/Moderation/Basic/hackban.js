const Discord = require("discord.js");

module.exports = {
  commands: "hackban",
  run: async (message, args, text, client, user) => {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag)
          .setDescription(
            "**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**"
          )
      );

    let userID = args[0];
    let reason = args.slice(1).join(" ");

    if (!userID) return message.channel.send("Please specify a valid User ID");
    if (isNaN(userID)) return message.channel.send("User ID must be a number");
    if (userID === message.author.id)
      return message.channel.send("You can not ban yourself");
    if (userID === client.user.id)
      return message.channel.send("Please do not ban me!");

    if (!reason) reason = "No Reason Provided";

    client.users
      .fetch(userID)
      .then(async (user) => {
        await message.guild.members.ban(user.id, { reason: reason });
        return message.channel.send(`${user.tag} has been banned`);
      })
      .catch(() => {
        return message.channel.send("An error occurred");
      });
  },
};
