import { Context } from '../package/index.ts';

const startCommand = (ctx: Context) => {
  ctx.reply('Hello World!');
};

export { startCommand };
