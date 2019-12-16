const Discord = require("discord.js");
const ytdl = require("ytdl-core");
exports.run = (client, message, args) => {
    if (message.member.voiceChannel) {
        var pelnytekst = message.content.split(" ").slice(1).join(" ");
        message.member.voiceChannel.join()
        .then(connection => { 
            connection.playStream(ytdl(pelnytekst), { filter: 'audioonly'})
        })
        .catch(console.log);
    } else {
        message.channel.sendMessage("Musisz byc na kanale glosowym aby to uzyc!");
    }
}