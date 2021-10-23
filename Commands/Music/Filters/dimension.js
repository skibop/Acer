module.exports = {
  commands: ["dimension", "8D"],
  cooldown: 3,
  run: (message, args, text, client) => {
    const player = message.client.manager.get(message.guild.id);
    if (!player) return message.reply("Nothing is playing at the moment.");

    const { channel } = message.member.voice;

    if (!channel) return message.reply("You need to join a voice channel.");
    if (channel.id !== player.voiceChannel)
      return message.reply("You are not in the same voice channel as the bot.");

    player.eightD = true;

    return message.reply(`Eight Dimension activated`);
  },
};
