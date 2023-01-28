import { Context } from '../package/index.ts';

const helpCommand = (ctx: Context) => {
  ctx.reply("This is just a template bot, which's source code here!");
};

export { helpCommand };
