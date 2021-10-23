const Discord = require("discord.js");
const covid = require("novelcovid");

module.exports = {
  commands: "covid",
  cooldown: 3,
  run: async (message) => {
    const covidStats = await covid.all();

    const embed = new Discord.MessageEmbed()
      .setTitle("Covid-19 Stats")
      .setColor("#231F20")
      .setFooter(
        "Requested by " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/826590345047179327/835516943335292979/2B5J48F-e1584366568355.png"
      )
      .setDescription("Here are the Stats of the Current Covid-19 Pandemic!")
      .setAuthor(message.author.username)
      .addFields(
        {
          name: `Cases`,
          value: covidStats.cases.toLocaleString(),
          inline: true,
        },
        {
          name: `Cases Today`,
          value: covidStats.todayCases.toLocaleString(),
          inline: true,
        },
        {
          name: `Deaths`,
          value: covidStats.deaths.toLocaleString(),
          inline: true,
        },
        {
          name: `Deaths Today`,
          value: covidStats.todayDeaths.toLocaleString(),
          inline: true,
        },
        {
          name: `Recovered`,
          value: covidStats.recovered.toLocaleString(),
          inline: true,
        },
        {
          name: `Recovered Today`,
          value: covidStats.todayRecovered.toLocaleString(),
          inline: true,
        },
        {
          name: `Infected Currently`,
          value: covidStats.active.toLocaleString(),
          inline: true,
        },
        {
          name: `Critical Condition`,
          value: covidStats.critical.toLocaleString(),
          inline: true,
        },
        {
          name: `Tested`,
          value: covidStats.tests.toLocaleString(),
          inline: true,
        },
        {
          name: "Help Stop The Spread!",
          value:
            "[Fight Against Covid!](https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html)",
        }
      );
    message.channel.send(embed);
  },
};
