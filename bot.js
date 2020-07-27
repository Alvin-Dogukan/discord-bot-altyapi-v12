const Discord = require("discord.js");
const client = global.client;
// ----------------------------------------------
// Siteden aldığınız kodları bu kısımada koyabilirsiniz.




// ----------------------------------------------

client.login(global.Ayarlar.Token).catch(err => {console.error("Geçersiz bir token girmişsin.")});
