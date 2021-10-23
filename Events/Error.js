const client = require("../index");
const logChannel = "868657143010705518";

client.on("error", (err, client) => {
  console.log(err).catch(err);
  const error = new Discord.MessageEmbed()
    .setTitle("New Error!")
    .setDescription(err)
    .setTimestamp()
    .setColor("#36393f");
  client.channels.cache.get(logChannel).send(error);
});
