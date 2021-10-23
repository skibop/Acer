const Discord = require("discord.js");

const pp = [
  '8D',
  '8=D',
  '8==D',
  '8===D',
  '8====D',
  '8=====D',
  '8======D',
  '8=======D',
  '8========D',
  '8=========D',
  '8==========D',
  '8===========D',
  '8============D',
  '8=============D',
  '8==============D',
  '8===============D',
  '8================D',
  '8=================D',
  '8==================D',
  '8===================D',
  '8====================D',
  '8=====================D',
  '8======================D',
  '8=======================D',
  '8========================D',
  '8=========================D'
];

module.exports = {
  commands: ["pp"],
  cooldown: 1,
  run: (message, args) => {
    const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(!member)
    return message.reply(`Mention someone or provide their user ID to get their PP Size`)

    const embed = new Discord.MessageEmbed()
    .setTitle('PP Size Machine')
    .setDescription(`${member.displayName}'s PP is this big\n\`\`\`${pp[Math.floor(Math.random() * pp.length)]}\`\`\``)
    .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor("#231F20")      

    message.channel.send(embed)
  },
};
