require('dotenv').config();
const { REST, Routes, bold } = require('discord.js')

const commands = [
    {
        name: 'add',
        description : 'Adds two number'
    },
];

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Start Registerd Slash Command')

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            {body: commands}
        );

        

        console.log('Success Registerd Slash Command')
    } catch (error) {
        console.log(`There was an error ${error}`)
    }
})();