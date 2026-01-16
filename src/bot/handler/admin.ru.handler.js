import AdminModel from "../../model/Admin.model.js";
import {
  adminRuMenuText,
  editingRuLanguageText,
  productRuMenuText,
  settingsAdminRuMenuText,
} from "../../other/ru.language.js";
import { settingsAdminUzMenuText } from "../../other/uz.language.js";
import bot from "../bot.js";
import {
  adminRuMenuKeyboard,
  editingLanguageKeyboard,
  productRuMenuKeyboard,
  settingsAdminRuMenuKeyboard,
  settingsAdminUzMenuKeyboard,
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
    parse_mode: "Markdown",
  });
};

export const settingsAdminRuMenu = (chatId) => {
  bot.sendMessage(chatId, settingsAdminRuMenuText(), {
    reply_markup: settingsAdminRuMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const editingLanguageAdminRu = async (chatId) => {
  const findAdmin = await AdminModel.findOne({ user_id: chatId });
  bot.sendMessage(chatId, editingRuLanguageText(), {
    reply_markup: {
      keyboard:
        findAdmin.language == "ru"
          ? editingLanguageKeyboard().uzLanguageKeyboard
          : editingLanguageKeyboard().ruLanguageKeyboard,
      resize_keyboard: true,
    },
    parse_mode: "Markdown"
  });
};

export const chooseLanguageAdminRu = async (chatId) => {
  await AdminModel.findOneAndUpdate({ user_id: chatId }, { language: "uz" });
  bot.sendMessage(chatId, settingsAdminUzMenuText(), {
    reply_markup: settingsAdminUzMenuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backSettingsRuMenu = (chatId) => {
  bot.sendMessage(chatId, settingsAdminRuMenuText(), {
    reply_markup: settingsAdminRuMenuKeyboard(),
    parse_mode: "Markdown",
  });
};
