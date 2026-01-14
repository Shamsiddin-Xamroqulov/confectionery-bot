import { clientLanguageText } from "../../other/any.language.js";
import { registerUzText } from "../../other/uz.language.js";
import bot from "../bot.js";
import { languageKeyboard, registerUzKeyboard } from "../keys/keyboard.js";

export const clientLanguageHandler = (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, clientLanguageText(msg), {
        reply_markup: languageKeyboard(),
        parse_mode: "Markdown"
    });
};

export const registerUzValidateHandler = (chatId) => {
    bot.sendMessage(chatId, registerUzText(), {
        reply_markup: registerUzKeyboard(),
        parse_mode: "Markdown"
    });
};