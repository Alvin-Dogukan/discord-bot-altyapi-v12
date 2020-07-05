const Discord = require("discord.js");

// exports.onLoad = (client) => {};

exports.run = async (client, message, args) => {
    let hedefÜye = message.mentions.users.first() || message.author;
    message.channel.send(`${hedefÜye}, merhaba!`);
};

exports.conf = {
    name: "mrb",
    aliases: ["meyaba", "myb"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'merhaba', 
    description: 'Merhaba diye cevap verir.',
    usage: 'merhaba [@etiket]',
    kategori: 'kullanıcı'
};