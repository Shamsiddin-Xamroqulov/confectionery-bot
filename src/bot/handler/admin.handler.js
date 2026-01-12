import { adminLanguageText } from "../../other/any.language.js";
import bot from "../bot.js";
import { languageKeyboard } from "../keys/keyboard.js";

export const adminHandler = async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, adminLanguageText(), {
        reply_markup: languageKeyboard(), 
        parse_mode: "Markdown"
    });
};