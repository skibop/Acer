const { Util } = require("discord.js");

module.exports = {
  commands: "steal-emoji",
  permissions: ["MANAGE_GUILD", "ADMINISTRATOR"],
  cooldown: 1,
  run: async (message, args) => {
    if (!args.length) return message.reply("Please specify some emojis!");

    for (const rawEmoji of args) {
      const parsedEmoji = Util.parseEmoji(rawEmoji);

      if (parsedEmoji.id) {
        const extension = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${
          parsedEmoji.id + extension
        }`;
        message.guild.emojis
          .create(url, parsedEmoji.name)
          .then((emoji) => message.channel.send(`Added: ${emoji.url}`));
      }
    }
  },
};
