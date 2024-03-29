const { Task } = require("@botbind/klasa");

module.exports = class extends Task {
  async run({ channel, user, text }) {
    const _channel = this.client.channels.get(channel);
    if (_channel)
      await _channel.send(`<@${user}> You wanted me to remind you: ${text}`);
  }
};
