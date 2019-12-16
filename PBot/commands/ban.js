const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var userid = args.toString().replace("<@", "").replace(">", "");
    if(userid == undefined || userid == "") {
        const Discord = require("discord.js");
        let emb = new Discord.RichEmbed()
            emb.addField("Uzycie", "Banuje gracza.\n\n`j!ban <@gracz>`")
            emb.setColor(0xffd000);
            emb.setFooter("Wywolane przez " + message.author.tag + " | PBot")
            message.channel.send(emb);
    } else {
        if(message.member.permissions.has("BAN_MEMBERS")) {
            message.guild.members.get(userid).ban("Zbanowano przez BOTA PBot")
        }
    }
}