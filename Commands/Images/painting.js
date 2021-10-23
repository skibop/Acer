const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
  commands: ["painting", "bobross"],
  cooldown: 1,
  run: async (message, args) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!user) return message.reply(`Provide a valid user!`);

    const avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024,
    });

    new DIG.Blur().getImage(avatar, 43);

    let img = await new DIG.Bobross().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "affect.png");

    message.channel.send(attach);
  },
};
