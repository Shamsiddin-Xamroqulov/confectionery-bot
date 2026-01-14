import { adminLanguageText } from "../../other/any.language.js";
import bot from "../bot.js";
import { languageKeyboard } from "../keys/keyboard.js";

export const adminLanguageHandler = async (msg, chatId) => {
    bot.sendMessage(chatId, adminLanguageText(), {
        reply_markup: languageKeyboard(), 
        parse_mode: "Markdown"
    });
};