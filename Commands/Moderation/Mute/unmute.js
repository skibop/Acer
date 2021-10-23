const Discord = require("discord.js");
const mongoose = require("mongoose");
const Schema = require("../../../Schema/mute-schema");

module.exports = {
  commands: "unmute",
  permissions: ["MANAGE_MESSAGES", "MUTE_MEMBERS"],
  permissionError: "You do not have permissions to unmute users!",
  cooldown: 2,
  run: async (message, args, text, client) => {
    const Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );

    if (!Member) return message.channel.send("Member was not found!");

    const role = message.guild.roles.cache.find(
      (r) => r.name.toLowerCase() === "muted"
    );
    Schema.findOne(
      {
        Guild: message.guild.id,
      },
      async (err, data) => {
        if (!data) return message.reply("Member was not muted!");
        const user = data.Users.findIndex((prop) => prop === Member.id);
        if (user == -1) return message.reply("Member is not muted!");
        data.Users.splice(user, 1);
        data.save();
        await Member.roles.remove(role);
        message.channel.send(`${Member.displayName} is now unmuted!`);
      }
    );
  },
};
