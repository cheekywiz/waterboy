const Discord = require("discord.js");
const client = new Discord.Client();
const Prefix = ">";

client.on("ready", () => {
  console.log("I'm Ready! Running on Node.js");
});

if (!message.content.startsWith(prefix)) return;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(":ballot_box_with_check: Pong!");
  }

});

client.login("process.env.BOT_TOKEN");