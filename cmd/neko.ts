/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
module.exports = {
    "name": "neko",
    "description": "neko",
    async execute(message, args, axios, Discord) {
      if (message.client.user.id == '868202816374722581') return;
      if (!message.channel.nsfw) return message.reply('???\n*Go to an NSFW channel!*');
        axios.get('https://nekos.life/api/v2/img/neko')
  .then(function (response) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setFooter('Powered by nekos.life')
    .setImage(response.data.url);
    message.reply({ embeds: [exampleEmbed], allowedMentions: { repliedUser: false }});
  })
  .catch(function (error) {
    message.reply(`fucky wucky: ${error}`);
  });
    }
};
