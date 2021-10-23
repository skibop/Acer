const Discord = require("discord.js");
const math = require("mathjs");

module.exports = {
  commands: "math",
  cooldown: 2,
  run: async (message, args) => {
    if (!args[0]) return message.channel.send(` Please provide a question`);

    let resp;

    try {
      resp = math.evaluate(args.join(" "));
    } catch (e) {
      return message.channel.send(`Please provide a **valid** question`);
    }

    const embed = new Discord.MessageEmbed()
      .setTitle("Calculator")
      .addField("Question", `\`\`\`css\n${args.join(" ")}\`\`\``)
      .addField("Answer", `\`\`\`css\n${resp}\`\`\``)
      .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setColor("#231F20");

    message.channel.send(embed);
  },
};
