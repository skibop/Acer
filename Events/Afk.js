const { afk } = require("../Utils/Collection");
const client = require("../index");
const moment = require("moment");

client.on("message", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  const mentionMember = message.mentions.members.first();
  if (mentionMember) {
    const data = afk.get(mentionMember.id);

    if (data) {
      const [timestamp, reason] = data;
      const timeago = moment(timestamp).fromNow();

      message.reply(
        `${mentionMember} is currently afk for (${timeago})\n Reason: ${reason}`
      );
    }
  }

  const getData = afk.get(message.author.id);
  if (getData) {
    afk.delete(message.author.id);
    message.channel.send(`${message.member} afk has removed!`);
  }
});
