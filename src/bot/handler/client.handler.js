import { clientLanguageText } from "../../other/any.language.js";
import bot from "../bot.js";
import { languageKeyboard } from "../keys/keyboard.js";

export const clientHandler = (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, clientLanguageText(msg), {
        reply_markup: languageKeyboard(),
        parse_mode: "Markdown"
    });
};