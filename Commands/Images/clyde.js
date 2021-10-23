const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: ["clyde", "cldye"],
  cooldown: 4,
  run: async (message, args, client) => {
    let text = args.join(" ");

    if (!text) {
      return message.channel.send("**Enter Text**");
    }

    try {
      let res = await fetch(
        encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
      );
      let json = await res.json();
      let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
      message.channel.send(attachment);
    } catch (e) {
      message.channel.send(`An error occured`);
    }
  },
};
