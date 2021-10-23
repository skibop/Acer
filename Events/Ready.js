const client = require("../index");
const config = require("../config.json");
const loadCommands = require("../Commands/load-commands");
const commandBase = require("../Commands/command-base");
const { Message } = require("discord.js");
const mongoose = require("mongoose");

require("dotenv").config();

client.on("ready", async () => {
  console.log(`Main Node Connected!`);
  const uc = client.guilds.cache
    .reduce((a, g) => a + g.memberCount, 0)
    .toLocaleString();
  client.user.setPresence({
    activity: {
      name: `${uc} || @Acer`,
      type: "WATCHING",
    },
    status: "dnd",
  });
  loadCommands(client);
  commandBase.loadPrefixes(client);
  mongoose
    .connect(process.env.mongoPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(console.log("MongoDB Node Connected!"));
  client.manager.init(client.user.id);
});

client.login(process.env.TOKEN);
