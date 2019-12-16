const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var userid = args.toString().replace("<@", "").replace(">", "");
    if(userid == undefined || userid == "") {
        var usz = message.author;
    } else {
        var usz = client.users.get(userid);
    }
    let emb = new Discord.RichEmbed()
            emb.setAuthor("Informacje o graczu")
            emb.addField("Tag", usz.tag)
            emb.addField("ID", usz.id)
            emb.addField("Status", usz.presence.status)
            emb.addField("Gra", usz.presence.game)
            emb.addField("Data dolaczenia", usz.createdAt.toString())
            emb.setColor(0xffd000);
            emb.setFooter("Wywolane przez " + message.author.tag + " | PBot")
            message.channel.send(emb);
}