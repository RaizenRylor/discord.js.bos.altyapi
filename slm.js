const { Client, Intents } = require('discord.js');
const { config } = require('./ayarlar.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });//intentlerle alakalı za


client.once('ready', () => {
	console.log('Hazrm');
});

// Bota bğlanması içn token lazm ayarlar.jsona yazcz tokni
client.login(config);
