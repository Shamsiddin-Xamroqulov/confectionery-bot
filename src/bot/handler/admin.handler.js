import AdminModel from "../../model/Admin.model.js";
import { adminLanguageText } from "../../other/any.language.js";
import { settingsAdminRuMenuText } from "../../other/ru.language.js";
import {
  adminUzMenuText,
  editingUzLanguageText,
} from "../../other/uz.language.js";
import {
  productUzMenuText,
  settingsAdminUzMenuText,
} from "../../other/uz.language.js";
import bot from "../bot.js";
import {
  adminUzMenuKeyboard,
  editingLanguageKeyboard,
  languageKeyboard,
  productUzMenuKeyboard,
  settingsAdminRuMenuKeyboard,
  settingsAdminUzMenuKeyboard,
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

export const settingsAdminUzMenu = (chatId) => {
  bot.sendMessage(chatId, settingsAdminUzMenuText(), {
    reply_markup: settingsAdminUzMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const editingLanguageAdminUz = async (chatId) => {
  const findAdmin = await AdminModel.findOne({ user_id: chatId });
  bot.sendMessage(chatId, editingUzLanguageText(), {
    reply_markup: {
      keyboard:
        findAdmin.language == "uz"
          ? editingLanguageKeyboard().ruLanguageKeyboard
          : editingLanguageKeyboard().uzLanguageKeyboard,
      resize_keyboard: true,
    },
    parse_mode: "Markdown"
  });
};

export const chooseLanguageAdminUz = async (chatId) => {
  await AdminModel.findOneAndUpdate({ user_id: chatId }, { language: "ru" });
  bot.sendMessage(chatId, settingsAdminRuMenuText(), {
    reply_markup: settingsAdminRuMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backSettingsUzMenu = (chatId) => {
  bot.sendMessage(chatId, settingsAdminUzMenuText(), {
    reply_markup: settingsAdminUzMenuKeyboard(),
    parse_mode: "Markdown"
  });
};