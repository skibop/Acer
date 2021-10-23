const Discord = require("discord.js");
const { antijoin } = require("../../../Utils/Collection");

module.exports = {
  commands: "antiraid",
  run: async (message, args, text, client) => {
    const query = args[0]?.toLowerCase();
    if (!query)
      return message.channel.send("Please speficy **enable** or **disable**");

    let getCollection = antijoin.get(message.guild.id);

    if (query === "enable") {
      if (getCollection) return message.reply("Antijoin is already enabled");

      antijoin.set(message.guild.id, []);
      message.channel.send("Antiraid is enabled!");
    } else if (query === "disable") {
      if (!getCollection) return message.reply("Antijoin is already off!");

      antijoin.delete(message.guild.id);
      message.channel.send("Turned off antijoin system!");
    }
  },
};
