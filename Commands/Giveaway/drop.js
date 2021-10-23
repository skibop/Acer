const Nuggies = require("nuggies");
const Discord = require("discord.js");

module.exports = {
  commands: "drop",
  run: async (message, args, text, client) => {
    const prize = args[0];
    if (!prize) return message.reply("Please specify a prize to drop!");

    Nuggies.giveaways.drop({
      message: message,
      prize: prize,
      channel: message.channel.id,
      host: message.author.id,
    });
  },
};
