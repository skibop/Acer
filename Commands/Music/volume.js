module.exports = {
  commands: "volume",
  cooldown: 1,
  run: (message, args, text, client) => {
    const player = message.client.manager.get(message.guild.id);

    if (!player)
      return message.reply("There is nothing playing in this guild.");
    if (!args.length)
      return message.reply(`The player volume is \`${player.volume}\`.`);

    const { channel } = message.member.voice;

    if (!channel) return message.reply("You must join a voice channel.");
    if (channel.id !== player.voiceChannel)
      return message.reply("You are not in the same voice channel as the bot.");

    const volume = Number(args[0]);

    if (!volume || volume < 1 || volume > 100)
      return message.reply(
        "You need to give me a volume numberbetween 1 and 100."
      );

    player.setVolume(volume);
    return message.reply(`Set the player volume to \`${volume}\`.`);
  },
};
