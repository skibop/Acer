const { afk } = require("../../Utils/Collection");

module.exports = {
  commands: "afk",
  run: async (message, args, text, client) => {
    const reason = args.join(" ") || "No Reason";

    afk.set(message.author.id, [Date.now(), reason]);

    message.reply(`You are now afk for ${reason}`);
  },
};
