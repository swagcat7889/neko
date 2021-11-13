/* eslint-disable sort-keys */
/* eslint-disable no-eval */
/* eslint-disable */
const { exec } = require('child_process');
module.exports = {
    "name": "exec",
    "description": "code execution",
   async execute(message, args, axios, discord) {
        if (message.author.id !== '526711537373806592') return;
        const { exec } = require("child_process");
        exec(args.join(' '), (error, data, getter) => {
        	if(error){
        		console.log("error",error.message);
                message.reply(require('util').inspect(error));
        		return;
        	}
        	if(getter){
	        	console.log("data",data);
                message.reply(require('util').inspect(data));
        		return;
        	}
        	console.log("data",data);
            message.reply(require('util').inspect(data));
        });
    }
};
