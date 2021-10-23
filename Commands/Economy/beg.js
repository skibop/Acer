const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();
const Discord = require("discord.js");

module.exports = {
  commands: "beg",
  run: async (message, args, text, client) => {
    let result = await cs.beg({
      user: message.author,
      minAmount: 100,
      maxAmount: 500,
    });

    const error = new Discord.MessageEmbed()
      .setDescription(`You have begged recently, try again in ${result.time}`)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor("#231F20");

    const earned = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(`You have earned $${result.amount}`)
      .setTimestamp()
      .setColor("#231F20");

    if (result.error) return message.channel.send(error);
    else message.channel.send(earned);
  },
};
