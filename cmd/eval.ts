/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
module.exports = {
    "name": "eval",
    "description": "code execution",
    execute(message, args, axios, discord) {
        var slice1 = 1;
        if (message.author.id !== "526711537373806592") {
            return;
        }
        const execute = args.join(" ");
        let out = 'init';
        try {
            out = require("util").inspect(eval(execute));
        }
        catch (err) {
            out = `Nie bo error: ${require("util").inspect(err)}`;
        }
        finally {
            const exampleEmbed = new discord.MessageEmbed()
	.setColor('#0099ff')
	// .setTitle('pass the rubbito eval')
	// .setURL('https://youtu.be/E0I6HsdEpNI')
	// .setAuthor('made by pass the burrito down#4261', 'https://cdn.discordapp.com/avatars/526711537373806592/de4e8f6799015dedacd0bf6608cc5873.webp?size=128', 'https://canary.discord.com/channels/818374882873442314/818382525310173185/905889183812452382')
	.setDescription(`\`\`\`js\n${out}\n\`\`\``)
    .setFooter(discord.rnd());
	// .setThumbnail('https://cdn.discordapp.com/avatars/526711537373806592/de4e8f6799015dedacd0bf6608cc5873.webp?size=128')
	// // .addFields(
	// // 	{ name: 'Regular field title', value: `${out}` },
	// // )
	// .setImage('https://cdn.discordapp.com/avatars/526711537373806592/de4e8f6799015dedacd0bf6608cc5873.webp?size=128')
	// .setTimestamp()
	// .setFooter('made by pass the burrito down#4261', 'https://cdn.discordapp.com/avatars/526711537373806592/de4e8f6799015dedacd0bf6608cc5873.webp?size=128');
            message.reply({ embeds: [exampleEmbed], allowedMentions: {repliedUser: false} });
        }
    }
};
