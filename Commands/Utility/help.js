const Discord = require("discord.js");

module.exports = {
  commands: ["help", "h"],
  run: async (message, args, text, client) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("Help Commands!")
      .setTimestamp()
      .setColor("#231F20")
      .setFooter(
        "Requested by " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .addFields(
        {
          name: "Fun!",
          value:
            "``8ball``, ``asciify``, ``coinflip``, ``dice``, ``epic gamer rate``, ``gayrate``, ``lesbianrate``, ``meme``, ``pp``, ``say``, ``simprate``, ``aki``, ``snakegame``, ``urban``, ``tictactoe``, ``steal-emoji``",
          inline: false,
        },
        {
          name: "Economy",
          value:
            "``balance``, ``beg``, ``daily``, ``weekly``, ``deposite``, ``gamble``, ``give``, ``leaderboard``, ``work``, ``withdraw``",
        },
        {
          name: "Giveaway!",
          value: "``giveaway``, ``end``, ``reroll``, ``start``, ``drop``",
          inline: false,
        },
        {
          name: "Images",
          value:
            "Animals - ``Bird``, ``Cat``, ``Dog``, ``Fox``, ``Panda`` \n  **Images** - ``Affect``, ``blur``, ``circle``, ``criminal``, ``deleted``, ``gay``, ``jail``, ``kiss``, ``slap``, ``spank``, ``stonks``, ``trash``, ``triggered``, ``wanted``, ``Ad``, ``Beauty``, ``Painting``, ``ConfusedStonks``, ``Facepalm``, ``captcha``, ``clyde``",
          inline: false,
        },
        {
          name: "Misc",
          value:
            "``about``, ``avatar``, ``covid``, ``member-count``, ``whois``, ``uptime``, ``invite``",
          inline: false,
        },
        {
          name: "Moderation",
          value:
            "``ban``, ``hackban``, ``showbans``, ``clear``, ``kick``, ``purge``, ``lock``, ``unlock``, ``mute``,  ``unmute``, ``slowmode``, ``un-slowmode``, ``hide``, ``unhide``, ``warn``, ``warns``, ``removewarn``, ``reportbug``,  ``roleinfo``, ``addrole``, ``delrole``, ``removerole``, ``channelinfo``, ``delchannel``, ``setnick``, ``reset-nick``",
          inline: false,
        },
        {
          name: "Music",
          value:
            "``play``, ``pause``, ``resume``, ``queue``, ``np``, ``repeat``, ``seek``, ``skip``, ``stop``, ``volume`` \n **Filters** - ``bassboost``, ``dimension``, ``karoke``, ``nightcore``, ``soft``, ``treblebass``, ``vaporwave`` ``reset-filters``",
          inline: false,
        },
        {
          name: "Utility",
          value:
            "``botstats``, ``help``, ``ping``, ``serverinfo``, ``vote``, ``poll``, ``servericon``, ``afk``, ``snipe``",
          inline: false,
        },
        {
          name: "Anime",
          value:
            "``baka``, ``bite``, ``blush``, ``bonk``, ``confused``, ``cuddle``, ``dance``, ``hug``, ``kill``, ``pat``, ``punch``, ``wink``",
          inline: false,
        },
        {
          name: "Leveling",
          value:
            "``rank``, ``blacklist``, ``channel-levelup``, ``levelup-message``",
        },
        {
          name: "Configuration",
          value:
            "``setprefix``, ``setwelcome``, ``setlogs``, ``disablelogs``, ``disablewelcome``, ``disablegoodbye``,  ``buttonroles``, ``dropdownroles``, ``autorole``",
        },
        {
          name: "Extra!",
          value:
            "[Invite Me](https://discord.com/oauth2/authorize?client_id=826119158097641474&permissions=335670519&scope=bot) | [Vote For Me](https://top.gg/bot/826119158097641474/vote) | [Support Server](https://discord.gg/StEfD4ap28)",
        }
      );
    message.channel.send(embed);
  },
};
