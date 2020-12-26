const Controller = require('../controllers/index-controller');

function router(message, command, args) {
  switch (command) {
    case 'ping':
      Controller.ping(message, args); break;
    case 'pong':
      Controller.pong(message, args); break;
    default:
      Controller.defaultResponse(message, command, args);
  }

  message.channel.send('2nd from router');
}

module.exports = router;