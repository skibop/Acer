module.exports = {
  commands: "skip",
  cooldown: 1,
  run: (message, args, text, client) => {
    const player = message.client.manager.get(message.guild.id);
    if (!player)
      return message.reply("There is nothing playing in this guild.");

    const { channel } = message.member.voice;
    if (!channel) return message.reply("You need to join a voice channel.");
    if (channel.id !== player.voiceChannel)
      return message.reply("You are not in the same voice channel as the bot.");

    if (!player.queue.current)
      return message.reply("There is currently no music playing.");

    const { title } = player.queue.current;

    player.stop();
    return message.reply(`${title} was skipped.`);
  },
};
