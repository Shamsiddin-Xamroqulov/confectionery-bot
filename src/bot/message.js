import ClientModel from "../model/Client.model.js";
import bot from "./bot.js";
import { aboutUzUs, backChoosingSettingsUz, backSettingsUzClient, chooseRuLanguage, editingUzLanguage, nameUzValidateHandler, phoneNumberUzValidateHandler, registerUzSuccessfully, registerUzValidateHandler, settingsUzClient } from "./handler/client.handler.js";
import { aboutRuUs, backChoosingSettingsRu, backSettingsRuClient, chooseUzLanguage, editingRuLanguage, nameRuValidateHandler, phoneNumberRuValidateHandler, registerRuSuccessfully, registerRuValidateHandler, settingsRuClient } from "./handler/client.ru.handler.js";
import startHandler from "./handler/start.handler.js";
import serverConfig from "../config.js";
import AdminModel from "../model/Admin.model.js";
import { adminUzMenu } from "./handler/admin.handler.js";
import { adminRuMenu } from "./handler/admin.ru.handler.js";
const {client_reg_states} = serverConfig;

bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const findClient = await ClientModel.findOne({user_id: chatId});
    const findAdmin = await AdminModel.findOne({user_id: chatId});

    if (msg.chat.type !== "private") return;
    if (text == "/start") return startHandler(msg, chatId);
    if(findAdmin && !(findAdmin.language)) {
        if(text == "🇷🇺 Русский") return adminRuMenu(chatId);
        if(text == "🇺🇿 Uzbek") return adminUzMenu(chatId);
    };
    if(findAdmin && findAdmin.language == "ru") {
        if(text == "🛒 Меню товаров") return productRuMenu(chatId);
    };
    if(findAdmin && findAdmin.language == "uz") {
        if(text == "🛒 Mahsulotlar menyusi") return productUzMenu(chatId);
    };
    if(findClient) {
        if (text == "🇷🇺 Русский" && findClient.step == client_reg_states.choosing_language) return registerRuValidateHandler(chatId);
        if (text == "🇺🇿 Uzbek" && findClient.step == client_reg_states.choosing_language) return registerUzValidateHandler(chatId);
        if (text == "📝 Регистрация") return nameRuValidateHandler(msg, chatId);
        if (text == "📝 Ro'yxatdan o'tish") return nameUzValidateHandler(msg, chatId);
    }

    // Client Ru
    if(findClient && findClient.language == "ru") {
        if(findClient.step == client_reg_states.entering_full_name) return phoneNumberRuValidateHandler(chatId, text);
        if(findClient.step == client_reg_states.entering_phone_number) return registerRuSuccessfully(chatId, msg.contact.phone_number, text);
        if(text == "🏪 О нас") return aboutRuUs(chatId);
        if(text == "⚙️ Настройки") return settingsRuClient(chatId);
        if(text == "⬅️ Назад") return backSettingsRuClient(chatId);
        if(text == "🌐 Изменить язык") editingRuLanguage(chatId);
        if(text == "🇺🇿 Uzbek") return chooseUzLanguage(chatId);
        if(text == "⬅️ Вернутся в Настройках") return backChoosingSettingsRu(chatId);
    };
    // Client Uz 
    if(findClient && findClient.language == "uz") {
        if(findClient.step == client_reg_states.entering_full_name) return phoneNumberUzValidateHandler(chatId, text);
        if(findClient.step == client_reg_states.entering_phone_number) return registerUzSuccessfully(chatId, msg.contact.phone_number, text);
        if(text == "🏪 Biz haqimizda") return aboutUzUs(chatId);
        if(text == "⚙️ Sozlamalar") return settingsUzClient(chatId);
        if(text == "⬅️ Ortga qaytish") return backSettingsUzClient(chatId);
        if(text == "🌐 Tilni o‘zgartirish") return editingUzLanguage(chatId);
        if(text == "🇷🇺 Русский") return chooseRuLanguage(chatId);
        if(text == "⬅️ Sozlamalarga qaytish") return backChoosingSettingsUz(chatId);
    };
});