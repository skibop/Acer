const Discord = require("discord.js");

module.exports = {
  commands: "invite",
  run: async (message, args, text, client) => {
    const invite = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .addFields({
        name: "Invite Link!",
        value:
          "[Invite Me](https://discord.com/oauth2/authorize?client_id=826119158097641474&permissions=335670519&scope=bot)",
      });
    message.channel.send(invite);
  },
};
