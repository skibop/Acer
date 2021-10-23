const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: "captcha",
  cooldown: 4,
  run: async (message, args, text, client) => {
    let user =
      (await message.mentions.members.first()) ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (r) =>
          r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;
    try {
      let res = await fetch(
        encodeURI(
          `https://nekobot.xyz/api/imagegen?type=captcha&username=${
            user.user.username
          }&url=${user.user.displayAvatarURL({ format: "png", size: 512 })}`
        )
      );
      let json = await res.json();
      let attachment = new Discord.MessageAttachment(
        json.message,
        "captcha.png"
      );
      message.channel.send(attachment);
    } catch (e) {
      console.log(e);
      message.channel.send(`An error occured!`);
    }
  },
};
