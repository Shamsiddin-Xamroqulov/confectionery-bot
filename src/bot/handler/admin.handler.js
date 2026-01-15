import AdminModel from "../../model/Admin.model.js";
import { adminLanguageText } from "../../other/any.language.js";
import { adminUzMenuText } from "../../other/ru.language.js";
import { productUzMenuText } from "../../other/uz.language.js";
import bot from "../bot.js";
import {
  adminUzMenuKeyboard,
  languageKeyboard,
  productUzMenuKeyboard,
} from "../keys/keyboard.js";

export const adminLanguageHandler = async (msg, chatId) => {
  bot.sendMessage(chatId, adminLanguageText(), {
    reply_markup: languageKeyboard(),
    parse_mode: "Markdown",
  });
};

export const adminUzMenu = async (chatId) => {
  await AdminModel.findOneAndUpdate({ user_id: chatId }, { language: "uz" });
  bot.sendMessage(chatId, adminUzMenuText(), {
    reply_markup: adminUzMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const productUzMenu = (chatId) => {
  bot.sendMessage(chatId, productUzMenuText(), {
    reply_markup: productUzMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backUzAdminMenu = (chatId) => {
  bot.sendMessage(chatId, adminUzMenuText(), {
    reply_markup: adminUzMenuKeyboard(),
    parse_mode: "Markdown",
  });
};
