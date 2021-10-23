const client = require("../index");
const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const { MessageEmbed } = require("discord.js");
const filter = require("erela.js-filters");
const Deezer = require("erela.js-deezer");

const config = require("../config.json");
client.config = config;

const clientID = config.clientID;
const clientSecret = config.clientSecret;

client.manager = new Manager({
  plugins: [
    new Spotify({
      clientID,
      clientSecret,
    }),
    new filter(),
    new Deezer(),
  ],
  nodes: [
    {
      id: "MAIN",
      host: config.host,
      port: config.port,
      password: config.password,
      retryDelay: 100,
      RETRY_AMOUNT: 5,
    },
  ],
  autoPlay: true,
  send: (id, payload) => {
    const guild = client.guilds.cache.get(id);
    if (guild) guild.shard.send(payload);
  },
})
  .on("nodeConnect", (node) =>
    console.log(`Node "${node.options.identifier}" connected.`)
  )
  .on("nodeError", (node, error) =>
    console.log(
      `Node "${node.options.identifier}" encountered an error: ${error.message}.`
    )
  )
  .on("nodeDisconnect", async (player, node) => {
    if (player && player.node && !player.node.connected)
      await player.node.connect();
  })
  .on("trackStart", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        ` | NOW PLAYING`,
        client.user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setDescription(`[${track.title}](${track.uri})`)
      .addField(`Requested By : `, `${track.requester}`, true);

    channel.send(embed);
  })
  .on("trackStuck", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `Track Stuck:`,
        client.user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setDescription(`${track.title}`);

    channel.send(embed);
  })
  .on("queueEnd", (player) => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed2 = new MessageEmbed().setColor("RANDOM").setAuthor(
      `Queue has ended`,
      client.user.displayAvatarURL({
        dynamic: true,
      })
    );

    channel.send(embed2);
    player.destroy();
  });
