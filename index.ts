/* eslint-disable */
// require('heapdump');
// process.kill(process.pid, 'SIGUSR1');
require('dotenv').config()
const {Client, Intents, Collection} = require("discord.js");
const discord = require('discord.js');
const {token, prefix} = require("./package.json");
const fs = require("fs");
const axios = require('axios').default;
const owoify = require('owoify-js').default
//     cat = new Intents();
// cat.add(32767);
discord.rnd = function() {
    switch (Math.floor(Math.random() * 6)) {
        case 0:
            return 'OwO'
        case 1:
            return 'UwU'
        case 2:
            return 'OvO'
        case 3:
            return 'UvU'
        case 4:
            return 'OwO?'
        case 5:
            return 'UwU?'
        case 6:
            return 'OvO?'
    }
}
const client = new Client({"intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Collection();
const catlol = "cat";
client.on("ready", async () => {
        console.log(`UwU || Logged in as ${client.user.tag}`);
        client.user.setActivity(`${prefix} pwefix | ${client.ws.ping}ms`, { type: 'LISTENING' });
        client.emit('dbg', 'ok');
    }
);
client.on('dbg', async (dbg) => {
    // const channel = client.channels.cache.get('906604023363297301');
    // channel.send(`${dbg}`);
    console.log(dbg);
});
setInterval(function() {
    client.user.setActivity(`${prefix} pwefix | ${client.ws.ping}ms`, { type: 'LISTENING' });
    client.emit('dbg', 'ok');
}, 60000);
const commandFiles = fs.readdirSync("./cmd").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./cmd/${file}`);
    /*
     * Set a new item in the Collection
     * With the key as the command name and the value as the exported module
     */
    client.commands.set(command.name, command);

}
client.on("messageCreate", async (message) => {
        if (!message.content.startsWith(process.env.prefix) || message.author.bot) {
            return;
        }
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/),
	  command = args.shift().toLowerCase();
        if (!client.commands.has(command)) {
            return;
        }
        try {
            client.commands.get(command).execute(message, args, axios, discord);

        } catch (error) {

            console.error(error);
            message.reply(`Fucky wucky an ewwow occuwwed: ${owoify(error.toString(), 'ovo')}`);

        }

    }
);
client.login(process.env.token);
process.on('unhandledRejection', async (a) => {
    client.emit('dbg', 'Unhandled Rejection:'+ a);
});