import bot from "./bot.js";
import startHandler from "./handler/start.handler.js";
import { messageValidateHelper } from "./helper/message.helper.js";

bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(msg.chat.type !== "private") return;
    if(text == "/start") return startHandler(msg, chatId);
    if(text == "🇷🇺 Русский") {
        return nameRuValidateHandler(msg, text);
    }else if (text == "🇺🇿 Uzbek") {
        return nameUzValidateHandler(msg, text);
    }else {
        return messageValidateHelper(chatId);
    };
});