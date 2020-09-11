const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

client.once('ready', () => {
    console.log('bot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); // args = arguments!!
    const command = args.shift().toLowerCase();
    let server = message.guild;

    if (command == 'links') {
        message.channel.send('🌟 instagram: https://www.instagram.com/koienshi/\n🌟 twitter: https://www.twitter.com/koienshi/\n🌟 tumblr: https://koienshi.tumblr.com/\n🌟 github: https://www.github.com/koienshi/\n🌟 portfolio: https://koienshi.github.io/\n🌟 store: https://www.koienshi.bigcartel.com/')
    }
    else if (command == 'send') {
        var attach = message.attachments;

        if (attach.size > 0) {
            for (var i=0; i<args.length; i++) {
                client.channels.cache.get('args[0]').send(attach);
            }
        } else {
            message.reply('there are no attachments!');
        }
        if (!args[0] || !args[0].startsWith('<')) message.reply('please specify a channel!');
    }
});

client.login('NzUzNzk1MjM0ODk0NDQ2ODAz.X1rYhA.C6Ym53SPmhDZbvIeta0VnziP4Zo');