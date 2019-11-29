const { Command } = require("@botbind/klasa");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: "creates a reminder",
      usage: "<when:time> <text:...str>",
      usageDelim: ", "
    });
  }

  async run(msg, [when, text]) {
    await this.client.schedule.create("reminder", when, {
      data: {
        channel: msg.channel.id,
        user: msg.author.id,
        text
      }
    });
    return msg.sendMessage("Ok, I will remind you.");
  }
};
