import { messageValidateText } from "../../other/any.language.js";
import bot from "../bot.js";

export const messageValidateHelper = (chatId) => {
    return bot.sendMessage(chatId, messageValidateText(), {
        parse_mode: "Markdown"
    });
};