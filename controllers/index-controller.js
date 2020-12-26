class Controller {
  static ping(message, args) {
    message.channel.send('pong from controller!');
  }

  static pong(message, args) {
    message.channel.send('dongdong from controller!');
  }

  static defaultResponse(message, command, args) {
    message.channel.send(
      `Texts sent after prefix: ${command} ${args}
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
    );
  }

}

module.exports = Controller;