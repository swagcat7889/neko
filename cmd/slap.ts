/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
module.exports = {
    "name": "slap",
    "description": "Hey! That hurts!",
    async execute(message, args, axios, Discord) {
        axios.get('https://nekos.life/api/v2/img/slap')
  .then(function (response) {
    // handle success
    const exampleEmbed = new Discord.MessageEmbed()
	// .setColor('#0099ff')
    .setFooter('Powered by nekos.life')
    .setImage(response.data.url);
    message.reply({ embeds: [exampleEmbed], allowedMentions: { repliedUser: false }});
  })
  .catch(function (error) {
    // handle error
    message.reply(`fucky wucky: ${error}`);
  });
    }
};
