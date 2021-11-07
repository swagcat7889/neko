/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
module.exports = {
  "name": "cat",
  "description": "Wandom cat, meow!",
  execute(message, args, axios, Discord) {
      axios.get('https://aws.random.cat/meow')
.then(function (response) {
  // handle success
  const embed = new Discord.MessageEmbed()
// .setColor('#0099ff')
  .setFooter('Powewed by aws.wandom.cat')
  .setImage(response.data.file);
  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
})
.catch(function (error) {
  // handle error
  message.reply(`fucky wucky: ${error}`);
});
  }
};
