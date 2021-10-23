const ownerid = "737069109484847174";

module.exports = {
  commands: "getinvite",
  run: async (message, args, text, client) => {
    if (message.author.id === ownerid) {
      let guild = null;

      if (!args[0]) return message.channel.send("Enter An Name");

      if (args[0]) {
        let fetched = client.guilds.cache.find(
          (g) => g.name === args.join(" ")
        );
        let found = client.guilds.cache.get(args[0]);
        if (!found) {
          if (fetched) {
            guild = fetched;
          }
        } else {
          guild = found;
        }
      } else {
        return message.channel.send("Invalid Name!");
      }
      if (guild) {
        let tChannel = guild.channels.cache.find(
          (ch) =>
            ch.type == "text" &&
            ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE")
        );
        if (!tChannel) {
          return message.channel.send("An Error Has Occured Try Again!");
        }
        let invite = await tChannel
          .createInvite({ temporary: false, maxAge: 0 })
          .catch((err) => {
            return message.channel.send(`${err} has occured!`);
          });
        message.channel.send(invite.url);
      } else {
        return message.channel.send(
          `\`${args.join(" ")}\` - Bot is Not in this server`
        );
      }
    } else {
      return;
    }
  },
};
