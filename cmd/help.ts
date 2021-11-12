/* eslint-disable */
module.exports = {
    "name": "help",
    "description": "Need help? This command is here for you!",
    async execute(message, args, axios, Discord) {
        const put = Date.now();
        let txt = '';
        message.client.commands.forEach(function (kot) {
            txt = txt+`**${Discord.prefix}${kot.name}** - ${kot.description}\n`;
        });
        txt = txt+`Took ${Date.now() - put}ms`;
        // const txt = `${message.client.commands.size} commands <:874549211390152724:907302743348219964>\n**SFW**\n**${Discord.prefix}animeme** - Random animeme from reddit\n**${Discord.prefix}cat** - Random cat! Nya!\n**${Discord.prefix}help** - You are viewing this right now\n**${Discord.prefix}ping** - Twy it and see:tm:\n**${Discord.prefix}slap** - But don't slap me!\n**NSFW**\n**${Discord.prefix}neko** - Hey, I'm enough for you!\n**${Discord.prefix}wallpaper** - Wallpaper command, i wonder why it's marked as NSFW...\n**${Discord.prefix}hentai** - Nooo~! Stop being hentai, please!`
        const exampleEmbed = new Discord.MessageEmbed()
        // .setColor('#0099ff')
        .setTitle(`${Discord.rnd()}?`)
        .setDescription(`${/* Discord.owoify(txt, "ovo")*/txt}`)
        .setFooter('Powewed by the aiw')
        .setThumbnail(message.client.user.avatarURL())
        .setImage('https://cdn.nekos.life/wallpaper/xAKeNluCRes.jpg');
        message.reply({ embeds: [exampleEmbed], allowedMentions: { repliedUser: false }});
    }
};
