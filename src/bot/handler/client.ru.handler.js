import ClientModel from "../../model/Client.model.js";
import {
  abuotRuUsText,
  editingRuLanguageText,
  fullNameRuText,
  phoneNumberRuText,
  registerRuSuccessfullText,
  registerRuText,
  settingsRuClientText,
} from "../../other/ru.language.js";
import bot from "../bot.js";
import {
  clientRuMenu,
  contactRuKeyboard,
  editingLanguageKeyboard,
  languageKeyboard,
  registerRuKeyboard,
  settingsRuKeyboard,
  settingsUzKeyboard,
} from "../keys/keyboard.js";
import serverConfig from "../../config.js";
import {
  fullNameRuSchema,
  phoneRuSchema,
} from "../../utils/validator/user.validator.js";
import { settingsUzClientText } from "../../other/uz.language.js";
const { client_reg_states } = serverConfig;

export const registerRuValidateHandler = async (chatId) => {
  await ClientModel.findOneAndUpdate(
    { user_id: chatId, step: client_reg_states.choosing_language },
    { language: "ru" }
  );
  bot.sendMessage(chatId, registerRuText(), {
    reply_markup: registerRuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const nameRuValidateHandler = async (msg, chatId) => {
  await ClientModel.findOneAndUpdate(
    { user_id: chatId },
    { username: msg.from.username, step: client_reg_states.entering_full_name }
  );
  bot.sendMessage(chatId, fullNameRuText(), {
    parse_mode: "Markdown",
  });
};

export const phoneNumberRuValidateHandler = async (chatId, text) => {
  const { error, value } = fullNameRuSchema.validate(text, {
    abortEarly: false,
  });
  if (error) return bot.sendMessage(chatId, error.message);
  await ClientModel.findOneAndUpdate(
    { user_id: chatId },
    { full_name: value, step: client_reg_states.entering_phone_number }
  );
  bot.sendMessage(chatId, phoneNumberRuText(), {
    reply_markup: contactRuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const registerRuSuccessfully = async (chatId, phone_number, text) => {
  if (phone_number) {
    await ClientModel.findOneAndUpdate(
      { user_id: chatId },
      { phone_number, step: client_reg_states.successfull }
    );
    bot.sendMessage(chatId, registerRuSuccessfullText(), {
      reply_markup: clientRuMenu(),
      parse_mode: "Markdown",
    });
  } else {
    const { error, value } = phoneRuSchema.validate(text, {
      abortEarly: false,
    });
    if (error) return bot.sendMessage(chatId, error.message);
    await ClientModel.findOneAndUpdate(
      { user_id: chatId },
      { phone_number: value, step: successfull }
    );
    bot.sendMessage(chatId, registerRuSuccessfullText(), {
      reply_markup: clientRuMenu(),
      parse_mode: "Markdown",
    });
  }
};

export const aboutRuUs = (chatId) => {
  bot.sendMessage(chatId, abuotRuUsText(), {
    parse_mode: "Markdown",
  });
};

export const settingsRuClient = async (chatId) => {
  bot.sendMessage(chatId, settingsRuClientText(), {
    reply_markup: settingsRuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backSettingsRuClient = (chatId, message_id) => {
  bot.deleteMessage(chatId, message_id);
  bot.sendMessage(chatId, "🏠 Главное меню", {
    reply_markup: clientRuMenu(),
  });
};

export const editingRuLanguage = async (chatId) => {
  const findClient = await ClientModel.findOne({ user_id: chatId });
  bot.sendMessage(chatId, editingRuLanguageText(), {
    reply_markup: {
      keyboard:
        findClient.language == "ru"
          ? editingLanguageKeyboard().uzLanguageKeyboard
          : editingLanguageKeyboard().ruLanguageKeyboard,
      resize_keyboard: true,
    },
    parse_mode: "Markdown",
  });
};

export const chooseUzLanguage = async (chatId) => {
  await ClientModel.findOneAndUpdate({ user_id: chatId }, { language: "uz" });
  bot.sendMessage(chatId, settingsUzClientText(), {
    reply_markup: settingsUzKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backChoosingSettingsRu = (chatId) => {
  bot.sendMessage(chatId, "⚙️ Настройки", {
    reply_markup: settingsRuKeyboard(),
  });
};
