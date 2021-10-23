const Discord = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
  commands: "slap",
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

    new DIG.Batslap().getImage(
      message.member.user.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      }),
      avatar
    );

    let img = await new DIG.Batslap().getImage(
      message.member.user.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      }),
      avatar
    );

    let attach = new Discord.MessageAttachment(img, "slap.png");

    message.channel.send(attach);
  },
};
