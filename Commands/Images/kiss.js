const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
  commands: "kiss",
  cooldown: 1,
  run: async (message, args) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!user) return message.reply(`Provide a valid user!`);

    const avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024,
    });

    new DIG.Kiss().getImage(
      avatar,
      message.member.user.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      })
    );

    let img = await new DIG.Kiss().getImage(
      avatar,
      message.member.user.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      })
    );

    let attach = new Discord.MessageAttachment(img, "blink.png");

    message.channel.send(attach);
  },
};
