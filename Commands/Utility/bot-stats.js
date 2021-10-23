const Discord = require("discord.js")
const os = require("os")
const cpuStat = require("cpu-stat")
const humanizeDuration = require('humanize-duration');

module.exports = {
    commands: ["stats", "botstats"],
    cooldown: 3,
    run: async (message, args, text, client) => {
        let { version } = require("discord.js");
     
    cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
      
      let secs = Math.floor(client.uptime % 60);
      let days = Math.floor((client.uptime % 31536000) / 86400);
      let hours = Math.floor((client.uptime / 3600) % 24);
      let mins = Math.floor((client.uptime / 60) % 60);

      const userCount = client.guilds.cache
      .map((guild) => guild.memberCount)
      .reduce((p, c) => p + c, 0);

      //let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      let embedStats = new Discord.MessageEmbed()
      .setTitle("Stats")
      .setAuthor(`Bot dev: haxxd#0001`)
      .setColor("#231F20")      
      .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
      .addField("• Uptime ", `${humanizeDuration(client.uptime, {round: true})}`, true) //`${duration}`, true)
      .addField("• Users", `${userCount}`, true)
      .addField("• Servers", `${client.guilds.cache.size}`, true)
      .addField("• Channels ", `${client.channels.cache.size}`, true)
      .addField("• Discord.js", `v${version}`, true)
      .addField("• Node", `${process.version}`, true)
      .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
      .addField("• Platform", `\`\`${os.platform()}\`\``,true)

      message.channel.send(embedStats);
  
     });
    }
}