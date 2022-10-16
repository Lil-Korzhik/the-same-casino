require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => {
    const chatId = ctx.message.chat.id,
          message = `Hello, ${ctx.from.first_name}.`;

    ctx.telegram.sendMessage(chatId, message);
});

bot.launch().then(() => {
    console.log('[LOG] | Bot launched successfully!');
});