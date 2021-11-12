/* eslint-disable */
// require('heapdump');

import { DiscordAPIError } from "discord.js";

// process.kill(process.pid, 'SIGUSR1');
require('dotenv').config();
const Keyv = require('keyv');
const {Client, Intents, Collection} = require("discord.js");
const discord = require('discord.js');
const {token} = require("./package.json");
const fs = require("fs");
const prefix = process.env.prefix
discord.prefix = prefix;
discord.keyv = new Keyv();
const axios = require('axios').default;
const owoify = require('owoify-js').default
discord.owoify = require('owoify-js').default;
//     cat = new Intents();
// cat.add(32767);
discord.rnd = function() {
    if (client.user.id === '868202816374722581') return 'Stif'
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
console.log(Intents.FLAGS)
const client = new Client({"intents": [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES], partials: ['MESSAGES']});
client.commands = new Collection();
const catlol = "cat";
client.on("ready", async () => {
        console.log(`UwU || Logged in as ${client.user.tag}`);
        client.user.setActivity(`${prefix} pwefix | ${client.ws.ping}ms`, { type: 'LISTENING' });
        client.emit('dbg', 'ok');
    }
);
client.on('dbg', async (dbg) => {
    // const channel = client.channels.cache.get('906912378107596910');
    // channel.send(`${dbg}`);
    console.log(dbg);
});
client.on('debug', async (debug) => {
    client.emit('dbg', debug);
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
    if (message.partial) return;
        if (!message.content.startsWith(process.env.prefix) || message.author.bot) {
            return;
        }
        if (discord.keyv.get(`${message.author.id}_gcldwn`) > Date.now()) {
            return;
        }
        discord.keyv.set(`${message.author.id}_gcldwn`, Date.now()+1750, 7500);
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
// client.on('messageDelete', async (message) => {
//     if (message.author.bot) return;
//     if (message.channel.nsfw) return;
// 	if (message.guild.id !== '904763090372001822') return;
// 	const stablecontent = message.content
// 	message.channel.send(`Wiadomość wysłana przez ${message.author.username}#${message.author.discriminator} (została usunięta też, ale nie wiem przez kogo):\n${stablecontent}`);
// });