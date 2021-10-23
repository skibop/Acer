const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();

module.exports = {
  commands: "weekly",
  run: async (message, args, text, client) => {
    let result = await cs.weekly({
      user: message.author,
      amount: 10000,
    });
    if (result.error)
      return message.channel.send(
        `You have used weekly recently Try again in ${result.time}`
      );
    else message.channel.send(`You have earned $${result.amount}.`);
  },
};
