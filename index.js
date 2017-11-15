const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"
client.on("ready", () => {
  console.log(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`)
})

client.login("MzgwMTk3NzQzODE1MTYzOTA0.DO4C0Q.ZbbkHfrBD5z78vQ13pea-gqztZU");
 
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.channel.type !== 'text') return;
  if (!message.content.startsWith("!")) return
 
  if (message.content.startsWith("!" + "regras")) {
    message.channel.sendMessage("Para ser atendido pelos Oprimions, sua denuncia deverá ter os seguintes itens: Nick, Trapper, Data e Provas. Entendido mortal ?")
  }
  if (message.content.startsWith("!" + "ola")) {
    message.channel.sendMessage("Saudações mortal, sou Amon, o demonio responsável pelas denúncias. Não tenha piedade, vamos punir os culpados.")
  }
});

client.login(process.env.BOT_TOKEN);
