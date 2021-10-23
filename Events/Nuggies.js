const Nuggies = require("nuggies");
const client = require("../index");
require("dotenv").config();

client.on("ready", () => {
  Nuggies.connect(process.env.mongoPath);
  Nuggies.giveaways.startAgain(client);
  Nuggies.giveaways.Messages(client, {
    nonoRole:
      "You do not have the required role(s)\n{requiredRoles}\n for the giveaway!", // only {requiredRoles} | ephemeral
    alreadyParticipated: "You have already entered this giveaway!", // no placeholders | ephemeral
    noWinner: "Not enough people participated in this giveaway.", // no {winner} placerholder
  });
});

Nuggies.handleInteractions(client);
