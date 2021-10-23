module.exports = {
  commands: ["ping", "latency"],
  cooldown: 3,
  run: (message, args, text, client) => {
    message.channel.send("Calculating Ping...").then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp;

      // resultMessage.edit(`**Latency:** **\`${Date.now() - message.createdTimestamp}\`ms**`);
      resultMessage.edit(`\`${ping}\` ms!`);
    });
  },
};
