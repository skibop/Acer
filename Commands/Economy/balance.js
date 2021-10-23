const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();
const Discord = require("discord.js");

module.exports = {
  commands: ["balance", "bal", "bank"],
  run: async (message, args, text, client) => {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]);
      if (user) user = user.user;
    } else if (!args[0]) {
      user = message.author;
    }

    let result = await cs.balance({
      user: user,
    });

    const embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `:coin: Wallet - $${result.wallet} \n :coin:  Bank - $${result.bank}`
      )
      .setTimestamp()
      .setColor("#231F20");

    message.channel.send(embed);
  },
};
