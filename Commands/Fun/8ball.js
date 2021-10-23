const Discord = require("discord.js");
const random = require("random");

module.exports = {
  commands: "8ball",
  cooldown: 1,
  run: (message, args) => {
    let answers = [
      "As i see it, yes.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again",
      "Don't count on it.",
      "It is certain.",
      "It is decidedly so.",
      "Most Likely",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Outlook good",
      "Reply hazy, try again",
      "Signs point to yes",
      "Very doubtful",
      "Without a doubt",
      "Yes",
      "Yes- Definitely",
      "You may rely on it",
    ]; // Defining the array for the answers

    if (!args[0]) {
      return message.channel.send("You need to provide something to ask!");
    }

    let response = random.int(0, answers.length - 1); // Generating a random number between 0 and the answers array length

    let embed = new Discord.MessageEmbed()
      .setTitle("8Ball Response")
      .setColor("#231F20")
      .setDescription(answers[response]); // Using the answers array aswell with the random number to display the bots response

    message.channel.send(embed);
  },
};
