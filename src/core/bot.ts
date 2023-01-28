import { Bot } from '../package/index.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const bot = new Bot(Deno.env.get('BOT_TOKEN')!);

bot.start();

export { bot };
