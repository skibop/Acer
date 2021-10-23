module.exports = {
  commands: "pause",
  cooldown: 1,
  run: (message, args, text, client) => {
    const player = message.client.manager.get(message.guild.id);
    if (!player)
      return message.reply("There is nothing playing in this server.");

    const { channel } = message.member.voice;

    if (!channel) return message.reply("You need to join a voice channel");
    if (channel.id !== player.voiceChannel)
      return message.reply("You are not in the same voice channel.");
    if (player.paused) return message.reply("The player is already paused.");

    player.pause(true);
    return message.reply("Paused the player.");
  },
};
