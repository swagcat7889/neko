/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
module.exports = {
    "name": "ping",
    "description": "Medium level way to check if the application is running.",
    execute(message, args, axios) {
        message.reply(`${message.client.ws.ping}ms latency ${Math.round(Math.random()) == 1 ? 'UwU' : 'OwO'}`);
    }
};
