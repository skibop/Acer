const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();

module.exports = {
  commands: "work",
  run: async (message, args, text, client) => {
    let result = await cs.work({
      user: message.author,
      maxAmount: 500,
      replies: [
        "Programmer",
        "Builder",
        "Waiter",
        "Busboy",
        "Chief",
        "Mechanic",
      ],
      cooldown: 25 * 75, // 31 Min,
    });
    if (result.error)
      return message.channel.send(
        `You have already worked recently Try again in ${result.time}`
      );
    else
      message.channel.send(
        `You worked as a ${result.workType} and earned $${result.amount}.`
      );
  },
};
