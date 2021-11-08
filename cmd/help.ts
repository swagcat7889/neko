/* eslint-disable */
module.exports = {
    "name": "help",
    "description": "Need help? This command is here for you!",
    async execute(message, args, axios, Discord) {
        const txt = `**${Discord.prefix}animeme** - Random animeme from reddit\n**${Discord.prefix}cat** - Random cat! Nya!\n**${Discord.prefix}help** - You are viewing this right now\n**${Discord.prefix}neko** - Hey, I'm enough fow you!\n**${Discord.prefix}ping** - Twy it and see:tm:\n**${Discord.prefix}slap** - But don't slap me!`
        const exampleEmbed = new Discord.MessageEmbed()
        // .setColor('#0099ff')
        .setTitle(`${Discord.rnd()}?`)
        .setDescription(`${Discord.owoify(txt, "ovo")}`)
        .setFooter('Powewed by the aiw')
        .setThumbnail(message.client.user.avatarURL())
        .setImage('https://cdn.nekos.life/wallpaper/xAKeNluCRes.jpg');
        message.reply({ embeds: [exampleEmbed], allowedMentions: { repliedUser: false }});
    }
};
