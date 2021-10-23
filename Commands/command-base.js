const commandPrefixSchema = require("../Schema/command-prefix-schema");
const { prefix: globalPrefix } = require("../config.json");
const mongoose = require("mongoose");
const guildPrefixes = {};
const Discord = require("discord.js");
require("dotenv").config();

const validatePermissions = (permissions) => {
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ];

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      throw new Error(`Unknown permission node "${permission}"`);
    }
  }
};

let recentlyRan = []; // GuildID - User ID - Command Ran

module.exports = (client, commandOptions) => {
  let {
    commands,
    expectedArgs = "",
    permissionError = "You do not have permission to run this command.",
    cooldown = -1,
    minArgs = 0,
    maxArgs = null,
    permissions = [],
    run,
  } = commandOptions;

  if (!commands) {
    return;
  }

  // Ensure the command and aliases are in an array
  if (typeof commands === "string") {
    commands = [commands];
  }

  // Ensure the permissions are in an array and are all valid
  if (permissions.length) {
    if (typeof permissions === "string") {
      permissions = [permissions];
    }

    validatePermissions(permissions);
  }

  // Listen for message
  client.on("message", (message) => {
    const { member, content, guild } = message;

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;

    const prefix = guildPrefixes[guild.id] || globalPrefix;

    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`;

      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {
        // A command has been ran

        // Ensure the user has the required permissions
        for (const permission of permissions) {
          if (!member.hasPermission(permission)) {
            message.reply(permissionError);
            return;
          }
        }

        // Ensure The User Has Not Already Ran This Command Frequently
        let cooldownString = `${guild.id}-${member.id}-${commands[0]}`;

        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          message.reply(`Woah there, slow it down.`);
          return;
        }

        // Split on any number of spaces
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        args.shift();

        if (
          arguments.length < minArgs ||
          (maxArgs !== null && arguments.length > maxArgs)
        ) {
          message.reply(
            `Incorrect syntax! Use ${prefix}${alias} ${expectedArgs}`
          );
          return;
        }

        if (cooldown > 0) {
          recentlyRan.push(cooldownString);

          setTimeout(() => {
            recentlyRan = recentlyRan.filter((string) => {
              return string !== cooldownString;
            });
          }, 1000 * cooldown);
        }

        // Handle the custom command code
        run(message, args, args.join(" "), client);

        return;
      }
    }
  });
};

module.exports.updateCache = (guildId, newPrefix) => {
  guildPrefixes[guildId] = newPrefix;
};

module.exports.loadPrefixes = async (client) => {
  try {
    for (const guild of client.guilds.cache) {
      const guildId = guild[1].id;

      const result = await commandPrefixSchema.findOne({ _id: guildId });
      // guildPrefixes[guildId] = result.prefix;
      if (result) {
        guildPrefixes[guildId] = result.prefix;
      } else {
        guildPrefixes[guildId] = globalPrefix;
      }
    }

    // console.log(guildPrefixes);
  } catch (e) {
    console.log(e);
  }
};
