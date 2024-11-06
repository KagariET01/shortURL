import {Client,GatewayIntentBits} from 'discord.js';
import {readFileSync} from 'fs';
import {color} from './libs/color.js';

const config = JSON.parse(readFileSync(new URL('./cfg.json', import.meta.url)));

const client = new Client(
	{
		intents:[
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.MessageContent
		]
	}
);

client.on('ready', () => {
	console.log('Bot is ready');
	console.log('Logged in as ' + client.user.tag);
	console.log('Bot ID: ' + client.user.id);
})

const editmsg=(msg)=>{
	msg=msg.replaceAll("https://x.com","https://fxtwitter.com");
	msg=msg.replaceAll("feature=shared","");
	return msg;
};

client.on("messageCreate", async(msg) => {
	console.log("get msg");
	console.log(`${color.FgGreen+color.Bright}${msg.author.displayName}${color.FgWhite}@${color.FgCyan}[${msg.guild.name}]${color.FgMagenta}${msg.channel.name}${color.FgWhite}:${color.Reset} ${msg.content}`);
	if(!msg.channel.isSendable())return;
	if(!msg.deletable)return;
	if(config.using_imbot && msg.author.id==config.userid)return;
	let aftmsg=editmsg(msg.content);
	if(aftmsg!=msg.content){
		msg.channel.createWebhook({
			name: msg.author.displayName
		}).then(async(webhook) => {
			try{
				console.log(msg.author.avatarURL());
				await webhook.send(
					{
						content: aftmsg,
						avatarURL: msg.author.avatarURL()
					}
				);
				await msg.delete();
				await webhook.delete();
			}catch(e){
			}
		});
	}
})

client.login(config.token);
