const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();

module.exports = {
  commands: "gamble",
  run: async (message, args, text, client) => {
    let money = args.join(" ");
    if (isNaN(money)) return message.channel.send("Amount is not a number.");

    let result = await cs.gamble({
      user: message.author,
      amount: money,
      minAmount: 1,
      cooldown: 30, //30 seconds
    });
    if (result.error) {
      if (result.type == "amount")
        return message.channel.send("Please insert an amount first.");
      if (result.type == "nan")
        return message.channel.send("The amount was not a number.");
      if (result.type == "low-money")
        return message.channel.send(
          `You don't have enough money. You need ${result.neededMoney}$ more to perform the action. `
        );
      if (result.type == "gamble-limit")
        return message.channel.send(
          `You don't have enough money for gambling. The minimum was $${result.minAmount}.`
        );
      if (result.type == "time")
        return message.channel.send(
          `You need to wait **${result.second}** second(s) before you can gamble again.`
        );
    } else {
      if (result.type == "lost")
        return message.channel.send(
          `Ahh, no. You lose $${result.amount}. You have $${result.wallet} left in your wallet.`
        );
      if (result.type == "won")
        return message.channel.send(
          `Woohoo! You won $${result.amount}! You've $${result.wallet}. Good luck, have fun!`
        );
    }
  },
};
