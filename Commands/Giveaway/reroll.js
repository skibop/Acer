const Nuggies = require("nuggies");
const { MessageButton } = require("discord-buttons");

module.exports = {
  commands: "reroll",
  cooldown: 3,
  run: async (message, args, text, client) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.reply("You are not allowed to reroll giveaways!");
    if (!args[0])
      return message.reply("Please provide a message ID to the giveaway!", {
        allowedMentions: { repliedUser: false },
      });
    let win;
    try {
      win = await Nuggies.giveaways.reroll(client, args[0]);
    } catch (err) {
      console.log(err);
      return message.channel.send("Unable to find the giveaway!");
    }
    if (!win[0])
      return message.channel.send(
        "There are not enough people in the giveaway!"
      );
    message.channel.send(
      `Rerolled! <@${win}> is the new winner of the giveaway!`,
      {
        component: new MessageButton()
          .setLabel("Giveaway")
          .setURL(
            `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${args[0]}`
          )
          .setStyle("url"),
      }
    );
  },
};
