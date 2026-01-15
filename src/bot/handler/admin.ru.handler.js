import AdminModel from "../../model/Admin.model.js";
import { adminRuMenuText, productRuMenuText } from "../../other/ru.language.js";
import bot from "../bot.js";
import {
  adminRuMenuKeyboard,
  productRuMenuKeyboard,
} from "../keys/keyboard.js";

export const adminRuMenu = async (chatId) => {
  await AdminModel.findOneAndUpdate({ user_id: chatId }, { language: "ru" });
  bot.sendMessage(chatId, adminRuMenuText(), {
    reply_markup: adminRuMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const productRuMenu = (chatId) => {
  bot.sendMessage(chatId, productRuMenuText(), {
    reply_markup: productRuMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backRuAdminMenu = (chatId) => {
  bot.sendMessage(chatId, adminRuMenuText(), {
    reply_markup: adminRuMenuKeyboard(),
    parse_mode: "Markdown"
  });
};