const Nuggies = require("nuggies");

module.exports = {
  commands: "end",
  cooldown: 3,
  run: async (message, args, text, client) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.reply("You are not allowed to end giveaways!");
    if (!args[0])
      return message.reply(
        "Please provide a message ID of the giveaway to end!",
        { allowedMentions: { repliedUser: false } }
      );
    try {
      const data = await Nuggies.giveaways.getByMessageID(args[0]);
      const msg = await client.guilds.cache
        .get(data.guildID)
        .channels.cache.get(data.channelID)
        .messages.fetch(args[0]);
      await Nuggies.giveaways.end(msg, data, msg);
    } catch (err) {
      console.log(err);
      return message.channel.send("Unable to find the giveaway!");
    }
  },
};
