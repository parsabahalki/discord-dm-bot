const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'OTM0MzIzMTIzMTIwMTE5ODI4.YeuaNw.TDLVLXeToFfzGlFJfPzLca6CA60';
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}});
});
client.on('message', message =>{
    if (message.content === '!commands'){
        message.author.send('```bot commands : !godrat ban ( user or userid ) ( reason ) !vanity !owner !ozvshodan !test !secuirtyteam !admin !play !stop !skip !loop !ping !uptime !volume !search !remuse !remove  ```');
    };

});
client.on('message', message =>{
    if (message.content === '!dmtest'){
        message.author.send('Dm Shoma Baz Ast !');
    };

});
client.on('message', message =>{
    if (message.content === '!admin'){
        message.author.send('baraye admin shodan ticket baz koned ya be pv <@916398841010483261> payam beded ');
    };

});
client.on('message', message =>{
    if (message.content === '!servers'){
        message.author.send('beshtaren time play ma dar server lifeagian hast');
    };

});
client.on('message', message =>{
    if (message.content === '!ticket'){
        message.author.send('```mesage link ticket = ```https://discord.com/channels/852232509260955678/943885791241842738/945256716562485308        ');
    };

});
client.on('message', message =>{
    if (message.content === '!vanity'){
        message.author.send('https://discord.gg/viper-ir');
    };

});
client.on('message', message =>{
    if (message.content === '!owner'){
        message.author.send('<@827598919671349248>');
    };

});
client.on('message', message =>{
    if (message.content === '!joinfamilly'){
        message.author.send('```▬▬▬▬▬▬▬▬▬▬▬ ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬ ```   ```Family  𝐕𝐢𝐩𝐞𝐑 Ozv faal mipazirad ``` ```▬▬▬▬▬▬▬▬▬▬▬ ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬``````- daraye gang haye full vip va vip to server haye Fivem``````- daraye Member haye khob va ba tajrobe``````- dashtn event haye mokhtalef``` **sharayet : **```• 1 sen +15 • 2 dashtan adab va janbe bala • 3 hozor dashtan dar voice family • 4 set kardan tag va profile``````▬▬▬▬▬▬▬▬▬▬▬ ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬``` ***dar sorat dashtan sharayet ticket baz koned ya be pv highrank ha moraje koned***');
    };

});
client.on('message', message =>{
    if (message.content === '!secuirtyteam'){
        message.author.send('secuirty team : <@916398841010483261>');
    };

});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=test'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `test1
    test2
    test3
    test4
    test5`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.login(token);
