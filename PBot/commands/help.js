const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let emb = new Discord.RichEmbed()
            emb.addField("Witaj, jestem botem stworzonym na cel JustPVP!");
            emb.addField("Podstawowe Komendy - 4", "`help`, `ping`, `serverinfo`, `userinfo`");
            emb.addField("Fun - 2", "`avatar`, `banana`")
            emb.addField("Moderacyjne - 2", "`ban`, `kick`")
            emb.addField("Muzyka - 2", "`play`, `stop`")
            emb.addField("Zdjecia- 2", "`hug`,`slap`")
            emb.setColor(0xffd000);
            emb.setFooter("Wywolane przez " + message.author.tag + " | PBot")
            message.channel.send(emb);
}