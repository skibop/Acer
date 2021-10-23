const levels = {
  0: 0.0,
  1: 0.5,
  2: 1.0,
  3: 2.0,
};

module.exports = {
  commands: ["bassboost", "bb"],
  cooldown: 3,
  run: (message, args, text, client) => {
    const player = message.client.manager.get(message.guild.id);
    if (!player) return message.reply("Nothing is playing at the moment.");

    const { channel } = message.member.voice;

    if (!channel) return message.reply("You need to join a voice channel.");
    if (channel.id !== player.voiceChannel)
      return message.reply("You are not in the same voice channel as the bot.");

    let level = "0";
    if (args.length && args[0].toLowerCase() in levels)
      level = args[0].toLowerCase();

    const bands = new Array(3)
      .fill(null)
      .map((_, i) => ({ band: i, gain: levels[level] }));

    player.setEQ(...bands);

    return message.reply(`Set the bassboost level to ${level}`);
  },
};
