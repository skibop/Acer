const Discord = require("discord.js");
const Guild = require("../../../Schema/logs-schema");
const mongoose = require("mongoose");

module.exports = {
  commands: "setlogs",
  permissions: ["MANAGE_GUILD", "ADMINISTRATOR"],
  permissionError: "You do not have permissions to set a welcome channel!",
  run: async (message, args, text, client) => {
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel)
      return message.channel.send(
        "You need to specify a channel to set logging!"
      );
    const guild1 = message.guild;
    let webhookid;
    let webhooktoken;
    await channel
      .createWebhook(guild1.name, {
        avatar: guild1.iconURL({ format: "png" }),
      })
      .then((webhook) => {
        webhookid = webhook.id;
        webhooktoken = webhook.token;
      });

    if (!channel)
      return message.channel.send(
        "I cannot find that channel. Please mention a channel within this server."
      );

    await Guild.findOne(
      //will find data from database
      {
        guildID: message.guild.id,
      },
      async (err, guild) => {
        if (err) console.error(err);
        if (!guild) {
          // what the bot should do if there is no data found for the server
          const newGuild = new Guild({
            _id: mongoose.Types.ObjectId(),
            guildID: message.guild.id,
            guildName: message.guild.name,
            logChannelID: channel.id,
            webhookid: webhookid,
            webhooktoken: webhooktoken,
          });

          await newGuild
            .save() //save the data to database(mongodb)
            .catch((err) => console.error(err));

          return message.channel.send(
            `The log channel has been set to ${channel}`
          );
        } else {
          guild
            .updateOne({
              //if data is found then update it with new one
              logChannelID: channel.id,
              webhooktoken: webhooktoken,
              webhookid: webhookid,
            })
            .catch((err) => console.error(err));

          return message.channel.send(
            `The log channel has been updated to ${channel}`
          );
        }
      }
    );
  },
};
