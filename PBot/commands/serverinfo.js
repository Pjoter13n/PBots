const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let emb = new Discord.RichEmbed()
            emb.setAuthor("Informacje serverowe")
            emb.addField("Nazwa", message.guild.name)
            emb.addField("Ilosc graczy", message.guild.memberCount)
            emb.addField("Level veryfikacji", message.guild.verificationLevel)
            emb.addField("Region", message.guild.region)
            emb.addField("Wlasciciel", "<@" + message.guild.ownerID + ">")
            emb.addField("ID", message.guild.id)
            emb.setColor(0xffd000);
            emb.setFooter("Wywolane przez " + message.author.tag + " | PBot")
            message.channel.send(emb);
}