const Discord = require("discord.js");
const nekoslife = require("nekos.life")
const neko = new nekoslife();
var nazwawzmieniona;
exports.run = (client, message, args) => {
    var userid = args.toString().replace("<@", "").replace(">", "");
    if(userid == undefined || userid == "") {
        nazwawzmieniona = "himself"
    } else {
        nazwawzmieniona = client.users.get(userid).username;
    }
    neko.sfw.slap().then(pic => {
        let emb = new Discord.RichEmbed()
            emb.setAuthor(message.author.username + " uderzyl " + nazwawzmieniona)
            emb.setImage(pic.url)
            emb.setColor(0xffd000);
            emb.setFooter("zasilane przez nekos.life | PBot")
            message.channel.send(emb);
    });
    
}