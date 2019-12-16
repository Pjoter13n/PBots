const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.sendMessage(":ping_pong: | Ping: " + client.ping + "ms");
}