import ClientModel from "../../model/Client.model.js";
import { fullNameRuText, registerRuText } from "../../other/ru.language.js";
import bot from "../bot.js";
import { registerRuKeyboard } from "../keys/keyboard.js";
import serverConfig from "../../config.js";
const {client_reg_states} = serverConfig;

export const registerRuValidateHandler = async (chatId) => {
    bot.sendMessage(chatId, registerRuText(), {
        reply_markup: registerRuKeyboard(),
        parse_mode: "Markdown"
    });
};

export const nameRuValidateHandler = async (msg, chatId) => {
    const findUser = await ClientModel.findOne({chat_id: chatId});
    if(findUser) return bot.sendMessage(chatId, "Siz ro'yxatdan o'tib bo'gansiz");
    await ClientModel.create({chat_id: chatId, username: msg.from.username, step: client_reg_states.entering_full_name});
    bot.sendMessage(chatId, fullNameRuText(), {
        parse_mode: "Markdown"
    });
};