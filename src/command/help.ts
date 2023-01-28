import { bot } from '../core/bot.ts';
import { helpCommand } from '../controller/index.ts';

bot.command('help', helpCommand);
