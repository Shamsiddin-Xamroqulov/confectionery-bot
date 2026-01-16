import ClientModel from "../../model/Client.model.js";
import { clientLanguageText } from "../../other/any.language.js";
import {
  aboutUzUsText,
  editingPhoneNumberUzText,
  editingUzLanguageText,
  fullNameEditingSuccessfullUzText,
  fullNameEditingUzText,
  fullNameUzText,
  personalInfoUzText,
  phoneNumberEditingSuccessfullUzText,
  phoneNumberUzText,
  registerUzSuccessfullText,
  registerUzText,
  settingsUzClientText,
} from "../../other/uz.language.js";
import bot from "../bot.js";
import {
  clientUzMenu,
  contactUzKeyboard,
  editingLanguageKeyboard,
  languageKeyboard,
  personalInfoUzKeyboard,
  registerUzKeyboard,
  settingsRuKeyboard,
  settingsUzKeyboard,
} from "../keys/keyboard.js";
import serverConfig from "../../config.js";
import {
  fullNameUzSchema,
  phoneUzSchema,
} from "../../utils/validator/user.validator.js";
import { settingsRuClientText } from "../../other/ru.language.js";
const { client_reg_states } = serverConfig;

export const clientLanguageHandler = async (msg, chatId) => {
  await ClientModel.create({
    user_id: chatId,
    step: client_reg_states.choosing_language,
  });
  bot.sendMessage(chatId, clientLanguageText(msg), {
    reply_markup: languageKeyboard(),
    parse_mode: "Markdown",
  });
};

export const registerUzValidateHandler = async (chatId) => {
  await ClientModel.findOneAndUpdate(
    { user_id: chatId, step: client_reg_states.choosing_language },
    { language: "uz" }
  );
  bot.sendMessage(chatId, registerUzText(), {
    reply_markup: registerUzKeyboard(),
    parse_mode: "Markdown",
  });
};

export const nameUzValidateHandler = async (msg, chatId) => {
  await ClientModel.findOneAndUpdate(
    { user_id: chatId },
    { username: msg.from.username, step: client_reg_states.entering_full_name }
  );
  bot.sendMessage(chatId, fullNameUzText(), {
    parse_mode: "Markdown",
  });
};

export const phoneNumberUzValidateHandler = async (chatId, text) => {
  const { error, value } = fullNameUzSchema.validate(text, {
    abortEarly: false,
  });
  if (error) return bot.sendMessage(chatId, error.message);
  await ClientModel.findOneAndUpdate(
    { user_id: chatId },
    { full_name: value, step: client_reg_states.entering_phone_number }
  );
  bot.sendMessage(chatId, phoneNumberUzText(), {
    reply_markup: contactUzKeyboard(),
    parse_mode: "Markdown",
  });
};

export const registerUzSuccessfully = async (chatId, contact) => {
  if (contact) {
    await ClientModel.findOneAndUpdate(
      { user_id: chatId },
      {
        phone_number: contact.phone_number,
        step: client_reg_states.successfull,
      }
    );
    bot.sendMessage(chatId, registerUzSuccessfullText(), {
      reply_markup: clientUzMenu(),
      parse_mode: "Markdown",
    });
  } else {
    const { error, value } = phoneUzSchema.validate(contact, {
      abortEarly: false,
    });
    if (error) return bot.sendMessage(chatId, error.message);
    await ClientModel.findOneAndUpdate(
      { user_id: chatId },
      { phone_number: value, step: client_reg_states.successfull }
    );
    bot.sendMessage(chatId, registerUzSuccessfullText(), {
      reply_markup: clientUzMenu(),
      parse_mode: "Markdown",
    });
  }
};

export const aboutUzUs = (chatId) => {
  bot.sendMessage(chatId, aboutUzUsText(), {
    parse_mode: "Markdown",
  });
};

export const settingsUzClient = (chatId) => {
  bot.sendMessage(chatId, settingsUzClientText(), {
    reply_markup: settingsUzKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backSettingsUzClient = (chatId) => {
  bot.sendMessage(chatId, "🏠 Asosiy Menu", {
    reply_markup: clientUzMenu(),
  });
};

export const editingUzLanguage = async (chatId) => {
  const findClient = await ClientModel.findOne({ user_id: chatId });
  bot.sendMessage(chatId, editingUzLanguageText(), {
    reply_markup: {
      keyboard:
        findClient.language == "uz"
          ? editingLanguageKeyboard().ruLanguageKeyboard
          : editingLanguageKeyboard().uzLanguageKeyboard,
      resize_keyboard: true,
    },
    parse_mode: "Markdown",
  });
};

export const chooseRuLanguage = async (chatId) => {
  await ClientModel.findOneAndUpdate({ user_id: chatId }, { language: "ru" });
  bot.sendMessage(chatId, settingsRuClientText(), {
    reply_markup: settingsRuKeyboard(),
    parse_mode: "Markdown",
  });
};

export const backChoosingSettingsUz = (chatId) => {
  bot.sendMessage(chatId, settingsUzClientText(), {
    reply_markup: settingsUzKeyboard(),
  });
};

export const personalInfoUz = (chatId) => {
  bot.sendMessage(chatId, personalInfoUzText(), {
    reply_markup: personalInfoUzKeyboard(),
    parse_mode: "Markdown",
  });
};

export const editingPhoneNumberUz = async (chatId) => {
  await ClientModel.findOneAndUpdate(
    { user_id: chatId },
    { step: client_reg_states.edit_phone }
  );
  bot.sendMessage(chatId, editingPhoneNumberUzText(), {
    reply_markup: contactUzKeyboard(),
    parse_mode: "Markdown",
  });
};

export const phoneNumberEditingSuccessfullUz = async (chatId, contact) => {
  if (contact.phone_number) {
    await ClientModel.findOneAndUpdate(
      { user_id: chatId },
      {
        phone_number: contact.phone_number,
        step: client_reg_states.successfull,
      }
    );
    bot.sendMessage(chatId, phoneNumberEditingSuccessfullUzText(), {
      reply_markup: personalInfoUzKeyboard(),
    });
  }else {
    const {error, value} = phoneUzSchema.validate(contact, {abortEarly: false});
    if(error) return bot.sendMessage(chatId, error.message);
    await ClientModel.findOneAndUpdate({user_id: chatId}, {phone_number: value, step: client_reg_states.successfull});
    bot.sendMessage(chatId, phoneNumberEditingSuccessfullUzText(), {
      reply_markup: personalInfoUzKeyboard(),
    });
  };
};

export const fullNameEditingUz = async (chatId) => {
  await ClientModel.findOneAndUpdate({user_id: chatId}, {step: client_reg_states.edit_full_name});
  bot.sendMessage(chatId, fullNameEditingUzText(), {
    reply_markup: {
      remove_keyboard: true
    },
  });
};

export const fullNameEditingSuccessfullUz = async (chatId, text) => {
  const {error, value} = fullNameUzSchema.validate(text, {abortEarly: false});
  if(error) return bot.sendMessage(chatId, error.message);
  await ClientModel.findOneAndUpdate({user_id: chatId}, {full_name: value, step: client_reg_states.successfull});
  bot.sendMessage(chatId, fullNameEditingSuccessfullUzText(), {
    reply_markup: personalInfoUzKeyboard(),
  });
};