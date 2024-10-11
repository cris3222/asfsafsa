/*

☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆
                                                 
  _________ ___ ___ ._______   _________    
 /   _____//   |   \|   \   \ /   /  _  \   
 \_____  \/    ~    \   |\   Y   /  /_\  \  
 /        \    Y    /   | \     /    |    \ 
/_______  /\___|_  /|___|  \___/\____|__  / 
        \/       \/                     \/  
                    
DISCORD :  https://discord.com/invite/xQF9f9yUEM                   
YouTube : https://www.youtube.com/@GlaceYT                         
                                                                       
☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆


*/
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();
const express = require('express');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ],
});

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});
app.listen(port, () => {
  console.log('\x1b[36m[ SERVER ]\x1b[0m', '\x1b[32m SH : http://localhost:' + port + ' ✅\x1b[0m');
});

client.on("ready", () => {
	console.log(`Conectado como ${client.user.username}`.green)
});

const { ActivityType } = require(`discord.js`);


client.on("ready", () => {

	const time = (200*5);

	let status = [
	[{
		name: "Low Light",
		type: ActivityType.Streaming,
        url:  "https://www.youtube.com/watch?v=1vhh8z8bkko"
	}],
	[{
	
		name: "Low Light",
		type: ActivityType.Streaming,
        url:  "https://www.youtube.com/watch?v=1vhh8z8bkko"
	}]
	];
	setInterval(() => {
		function randomStatus() {
			let astatus = status[Math.floor(Math.random() * status.length)];
			client.user.setPresence({ activities: astatus, status: "dnd" });
	}
	randomStatus();
   }, time)
	console.log(`Conectado como ${client.user.username}`.green)
});

client.on("guildMemberAdd", (member) => {

	const embed = new EmbedBuilder()
	.setColor("Green")
	.setDescription(`Bienvenido/a usuario ${member.user.username} `)
	.addFields(
		{ name: "No olvides leer las reglas", value: "reglas: <#1293802875998310420>" },
	)
	.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
	.setTimestamp()

	client.channels.cache.get("1294197587666141236").send({ embeds: [embed] })
});
const config = require("./config.json")
let prefix = config.prefix; 

client.on("messageCreate", async (message) => {

	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	
	if(message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong")//
	}
	if(message.content.startsWith("Low Light")) {
		const embed = new EmbedBuilder()
		.setColor("White")
		.setDescription("Low Light la mejor shop lo digo sin atao")
		.setTitle("Low Light")
		.setImage("https://cdn.discordapp.com/avatars/776998630082609213/9a6711ef074c8d8a5004bfc1379fd161.png?size=1024")
		message.channel.send({ embeds: [embed] })
	}
	if(message.content.startsWith("xaska")) {
		message.channel.send("no hably tan reventao hijo la gran perra kualkier wea yo el ma xoro de aki el ke la llea y el ke roa de menor me epitiao kualkier monea brr")//
	}
})  	


client.on("messageCreate", async (message) => {

	if(message.content.startsWith("espuma ve mi perfil")) {
		message.channel.send("espuma <@954865691373228103> ve mi perfil y entra a donde dice ver vas a flipar despues me lo agradeces By Toaesa <@776998630082609213>")//
	}
}) 


async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log('\x1b[36m[ LOGIN ]\x1b[0m', `\x1b[32mLogged in as: ${client.user.tag} ✅\x1b[0m`);
    console.log('\x1b[36m[ INFO ]\x1b[0m', `\x1b[35mBot ID: ${client.user.id} \x1b[0m`);
    console.log('\x1b[36m[ INFO ]\x1b[0m', `\x1b[34mConnected to ${client.guilds.cache.size} server(s) \x1b[0m`);
  } catch (error) {
    console.error('\x1b[31m[ ERROR ]\x1b[0m', 'Failed to log in:', error);
    process.exit(1);
  }
}

function updateStatus() {
  const currentStatus = statusMessages[currentStatusIndex];
  const currentType = statusTypes[currentTypeIndex];
  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom }],
    status: currentType,
  });
  console.log('\x1b[33m[ STATUS ]\x1b[0m', `Updated status to: ${currentStatus} (${currentType})`);
  currentStatusIndex = (currentStatusIndex + 1) % statusMessages.length;
  currentTypeIndex = (currentTypeIndex + 1) % statusTypes.length;
}

function heartbeat() {
  setInterval(() => {
    console.log('\x1b[35m[ HEARTBEAT ]\x1b[0m', `Bot is alive at ${new Date().toLocaleTimeString()}`);
  }, 30000);
}

client.once('ready', () => {
  console.log('\x1b[36m[ INFO ]\x1b[0m', `\x1b[34mPing: ${client.ws.ping} ms \x1b[0m`);
  updateStatus();
  setInterval(updateStatus, 10000);
  heartbeat();
});

login();

  
/*

☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆
                                                 
  _________ ___ ___ ._______   _________    
 /   _____//   |   \|   \   \ /   /  _  \   
 \_____  \/    ~    \   |\   Y   /  /_\  \  
 /        \    Y    /   | \     /    |    \ 
/_______  /\___|_  /|___|  \___/\____|__  / 
        \/       \/                     \/  
                    
DISCORD :  https://discord.com/invite/xQF9f9yUEM                   
YouTube : https://www.youtube.com/@GlaceYT                         
                                                                       
☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*・°☆


*/
