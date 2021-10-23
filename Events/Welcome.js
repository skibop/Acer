const client = require("../index");
const db = require("../Schema/welcome-schema");
const canvas = require("discord-canvas");
const { MessageAttachment } = require("discord.js");

client.on("guildMemberAdd", async (member, guild) => {
  db.findOne({ GuildID: member.guild.id }, async (err, data) => {
    if (err) return;
    if (!data) return;
    const user = member.user;

    let image = await new canvas.Welcome()
      .setUsername(`${user.username}`)
      .setDiscriminator(`${user.discriminator}`)
      .setGuildName(`${member.guild.name}`)
      .setMemberCount(`${member.guild.members.cache.size}`)
      .setAvatar(user.displayAvatarURL({ dynamic: true, format: "png" }))
      .setColor("border", "#231F20")
      .setBackground(
        `https://cdn.discordapp.com/attachments/866128543880183828/868922727996747786/Welc.png`
      )
      .toAttachment();

    const attachment = new MessageAttachment(
      image.toBuffer(),
      "welcome-image.png"
    );

    const channel = member.guild.channels.cache.get(data.WelcomeID);

    if (!channel) return;
    channel.send(attachment);
  });
});
