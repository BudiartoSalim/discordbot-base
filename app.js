if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;
const prefix = process.env.DISCORD_PREFIX;

client.once('ready', () => {
  console.log('bot is ready!');
});

client.on('message', (message) => {
  //exits bot early if message does not start with prefix, or is made by another bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //remove the prefix and trim empty spaces, then split into array of strings separated by space
  const args = message.content.slice(prefix.length).trim().split(/ +/);

  //remove first element of array from args[] and assign it as nextcommand, then converting it to lowercase
  const nextcommand = args.shift().toLowerCase();

  //sending message in the channel where the command is invoked
  //for official documentation, check discord.js.org
  message.channel.send(
    `Texts sent after prefix: ${nextcommand} ${args}
    Sent in: ${message.guild.name} server. 
    Total members: ${message.guild.memberCount}
    Inside channel: ${message.channel.name}
    click here to go to channel -> <#${message.channel.id}>

    Sent by: ${message.author.username}
    With id: ${message.author.id}
    click here for the user -> <@${message.author.id}>
    `
  );

  message.channel.send(
    `You can send multiple messages separately too by the way <@${message.author.id}>`
  )
})

client.login(token);