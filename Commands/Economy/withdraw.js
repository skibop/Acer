const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();
const Discord = require("discord.js");

module.exports = {
  commands: "withdraw",
  run: async (message, args, text, client) => {
    let money = args.join(" ");
    if (!money)
      return message.channel.send("Enter the amount you want to withdraw.");

    let result = await cs.withdraw({
      user: message.author,
      amount: money,
    });
    if (result.error) {
      if (result.type === "money")
        return message.channel.send("Specify an amount to withdraw");
      if (result.type === "negative-money")
        return message.channel.send(
          "You can't withdraw negative money, please use deposit command"
        );
      if (result.type === "low-money")
        return message.channel.send("You don't have that much money in bank.");
      if (result.type === "no-money")
        return message.channel.send("You don't have any money to withdraw");
    } else {
      if (result.type === "all-success")
        return message.channel.send(
          "You have withdraw'd all your money from your bank"
        );
      if (result.type === "success")
        return message.channel.send(
          `You have withdraw $${result.amount} money from your bank.`
        );
    }
  },
};
