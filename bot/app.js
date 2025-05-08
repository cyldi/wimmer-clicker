import { Telegraf, Markup } from "telegraf";

const token = "7679176869:AAE89yEpI62n_5QfGUmCSd2ri66AzkGrXYE";
const webAppUrl = "https://wimmer-301e6.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}
        `),
    ])
  );
});

bot.launch();
