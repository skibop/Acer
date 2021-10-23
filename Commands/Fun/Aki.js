const Discord = require("discord.js");
const akinator = require("discord.js-akinator");

module.exports = {
  commands: ["aki", "akinator"],
  cooldown: 3,
  run: async (message, args, text, client) => {
    akinator(message, client, "en");
  },
};
