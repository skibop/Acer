const ms = require("ms");

module.exports = {
  commands: "slowmode",
  cooldown: 2,
  permissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
  permissionError: "You do not have permissions to use the slowmode command!",
  run: async (message, args) => {
    const raw = args[0];
    const milliseconds = ms(raw);

    if (isNaN(milliseconds)) return message.reply("This is not a valid time!");

    if (milliseconds < 1000)
      return message.reply("The minimum slowmode is one second..");

    message.channel.setRateLimitPerUser(milliseconds / 1000);
    message.channel.send(
      `The slowmode of this channel has been set to ${ms(milliseconds, {
        long: true,
      })}`
    );
  },
};
