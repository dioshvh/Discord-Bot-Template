const Discord = require ('discord.js');
const config = require("./config.json"); //make a 'config.json'// crea un archivo 'config.json' //
const client = new Discord.Client();
 
client.on('ready', ()=> {
  console.log('bot is ready!');
  client.user.setActivity('Tuto by zTa', {type: 'STREAMING', url:"UR WEBSITE"}).catch
});
 
client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === 'ping'){
  let ping = Math.floor(message.client.ws.ping); 
  message.channel.send('➡`' +ping +' ms.` desde su servidor.')
  }
  
  if(command === 'say'){ 
  const SayCMD = args.join(" "); // lo que introduzcas despues del comando se enviará
   message.delete().catch(O_o=>{}); //bot delete your text// el bot elimina tu mensaje
   message.channel.send(SayCMD); //bot send your text// el bot manda tu mensaje
  }
  
});
 
client.login(config.token);
