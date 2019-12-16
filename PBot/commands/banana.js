const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let emb = new Discord.RichEmbed()
            emb.setAuthor("Twoj banan ma " + Math.floor(Math.random() * 30) + "cm");
            emb.setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Twemoji2_1f34c.svg/512px-Twemoji2_1f34c.svg.png")
            emb.setColor(0xffd000);
            emb.setFooter("Wywolane przez " + message.author.tag + " |	PBot")
            message.channel.send(emb);
}