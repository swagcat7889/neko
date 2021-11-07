/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
module.exports = {
    "name": "animeme",
    "description": "Get a random meme from r/animemes.",
    execute(message, args, axios, Discord) {
        axios.get('https://reddit.com/r/animemes/random.json?limit=1')
            .then(function (response) {
            // handle success
            const deeta = response.data[0].data.children[0].data.url;
            const ups = response.data[0].data.children[0].data.ups
            const exampleEmbed = new Discord.MessageEmbed()
                // .setColor('#0099ff')
                .setFooter(`${ups} 👍 | Powered by reddit`)
                .setImage(deeta);
            message.reply({ embeds: [exampleEmbed], allowedMentions: { repliedUser: false } });
        })
            .catch(function (error) {
            // handle error
            message.reply(`fucky wucky: ${error}`);
        });
    }
};
