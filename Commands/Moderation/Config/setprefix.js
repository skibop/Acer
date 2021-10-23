const commandPrefixSchema = require("../../../Schema/command-prefix-schema");

const commandBase = require("../../command-base");

module.exports = {
  commands: ["setprefix", "prefix"],
  permissionError: "You do not have permissions to change the prefix!",
  permissions: "ADMINISTRATOR",
  cooldown: 2,
  run: async (message, args) => {
    if (!args[0]) {
      return message.channel.send("You need to provide a prefix!");
    }
    try {
      const guildId = message.guild.id;
      const prefix = args[0];
      if (prefix.length > 10)
        return message.reply("You can not have a prefix above 10 characters!");

      await commandPrefixSchema.findOneAndUpdate(
        {
          _id: guildId,
        },
        {
          _id: guildId,
          prefix,
        },
        {
          upsert: true,
        }
      );

      message.reply(`The prefix for this bot is now ${prefix}`);

      // Update the cache
      commandBase.updateCache(guildId, prefix);
    } catch (e) {
      console.log(e);
    }
  },
};
