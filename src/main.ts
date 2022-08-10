import { GatewayIntentBits, Client } from 'discord.js';
import dotenv from 'dotenv';
import colors from 'colors/safe';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(colors.green('✔ ') + 'Successfully logged in as ' + client.user?.tag + '!');
});

client.login(process.env.TOKEN);
