const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("_");
var activ = ("Moderer");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    bot.channels.get('455070342612910081').send("Je suis en ligne ! :D");
});

bot.login(process.env.TOKEN);
bot.on("guildMemberAdd", member => {
    bot.channels.get('454987596960104452').sendMessage('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉')
    var dC= member.guild.channels.find("name", "welcom  ");

    if (dC) {
        dC.send('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉');
    } else {
        member.guild.defaultChannel.send('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉');
    }
});
bot.on("guildMemberRemove", member => {
    bot.channels.get('4549876442928250902').sendMessage('**' + member.user.username + '** est partie. Rest in pepperoni...')
});
bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "empty":
 break;
    }

});
