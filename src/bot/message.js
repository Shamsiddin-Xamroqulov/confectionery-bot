import bot from "./bot.js";
import { registerUzValidateHandler } from "./handler/client.handler.js";
import { nameRuValidateHandler, registerRuValidateHandler } from "./handler/client.ru.handler.js";
import startHandler from "./handler/start.handler.js";

bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (msg.chat.type !== "private") return;
    if (text == "/start") return startHandler(msg, chatId);
    if (text == "🇷🇺 Русский") return registerRuValidateHandler(chatId);
    if (text == "🇺🇿 Uzbek") return registerUzValidateHandler(chatId);
    if (text == "📝 Регистрация") return nameRuValidateHandler(msg, chatId);
});