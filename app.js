if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;
const prefix = process.env.DISCORD_PREFIX;

const router = require('./routes/index');

client.once('ready', () => {
  console.log('bot is ready!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const nextcommand = args.shift().toLowerCase();

  router(message, nextcommand, args);
  message.channel.send('3rd message from app');
  return;
});

client.login(token);