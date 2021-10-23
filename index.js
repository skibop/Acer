const Discord = require("discord.js");

const client = new Discord.Client();
require("discord-buttons")(client);
require("./Utils/Logger")(client);
module.exports = client;

const { readdirSync } = require("fs");
client.snipes = new Map();

const EventEmitter = require("events");
EventEmitter.defaultMaxListeners = 300;

require("./Utils/Music");
client.on("raw", (d) => client.manager.updateVoiceState(d));

readdirSync("./Events/").forEach((file) => {
  const events = readdirSync("./Events/").filter((file) =>
    file.endsWith(".js")
  );

  for (const file of events) {
    let pull = require(`./Events/${file}`);

    if (pull.name) {
      client.events.set(pull.name, pull);
    } else {
      continue;
    }
  }
});
