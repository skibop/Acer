const CurrencySystem = require("currency-system");
const Discord = require("discord.js");
const cs = new CurrencySystem();

module.exports = {
  commands: ["leaderboard", "leader"],
  run: async (message, args, text, client) => {
    let data = await cs.leaderboard(message.guild.id);
    if (data.length < 1)
      return message.channel.send("Nobody's in leaderboard yet.");
    const msg = new Discord.MessageEmbed();
    let pos = 0;
    data.slice(0, 10).map((e) => {
      pos++;
      if (!client.users.cache.get(e.userID)) return;
      msg.addField(
        `${pos} - **${client.users.cache.get(e.userID).username}**`,
        `Wallet: **${e.wallet}** - Bank: **${e.bank}**`,
        true
      );
    });

    message.channel.send(msg).catch();
  },
};
