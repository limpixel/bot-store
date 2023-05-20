require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ]
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} Sudah online` )
});

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    // console.log(interaction.commandName)

    if (interaction.commandName ==='hey') {
        await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    }

    if (interaction.commandName ==='help') {
        await interaction.reply({ 
            content: 'Ada yang bisa saya bantu?', 
            ephemeral: true 
        });
    }
})

//---- Message Created ------
// client.on('messageCreate', (msg) => {

//     if(msg.author.bot) {
//         return;
//     }

//     if (msg.content === '!hello') {
//         msg.reply('!hello')
//     }
// })

// Hayooo
client.login(process.env.TOKEN);