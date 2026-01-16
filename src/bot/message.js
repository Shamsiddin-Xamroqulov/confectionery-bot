import ClientModel from "../model/Client.model.js";
import bot from "./bot.js";
import { aboutUzUs, backChoosingSettingsUz, backSettingsUzClient, chooseRuLanguage, editingPhoneNumberUz, editingUzLanguage, fullNameEditingSuccessfullUz, fullNameEditingUz, nameUzValidateHandler, personalInfoUz, phoneNumberEditingSuccessfullUz, phoneNumberUzValidateHandler, registerUzSuccessfully, registerUzValidateHandler, settingsUzClient } from "./handler/client.handler.js";
import { aboutRuUs, backChoosingSettingsRu, backSettingsRuClient, chooseUzLanguage, editingPhoneNumberRu, editingRuLanguage, fullNameEditingRu, fullNameEditingSuccessfullRu, nameRuValidateHandler, personalInfoRu, phoneNumberEditingSuccessfullRu, phoneNumberRuValidateHandler, registerRuSuccessfully, registerRuValidateHandler, settingsRuClient } from "./handler/client.ru.handler.js";
import startHandler from "./handler/start.handler.js";
import serverConfig from "../config.js";
import AdminModel from "../model/Admin.model.js";
import { adminUzMenu, backSettingsUzMenu, backUzAdminMenu, chooseLanguageAdminUz, editingLanguageAdminUz, productUzMenu, settingsAdminUzMenu } from "./handler/admin.handler.js";
import { adminRuMenu, backRuAdminMenu, backSettingsRuMenu, chooseLanguageAdminRu, editingLanguageAdminRu, productRuMenu, settingsAdminRuMenu } from "./handler/admin.ru.handler.js";
const {client_reg_states} = serverConfig;

bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const contact = msg.contact;
    const findClient = await ClientModel.findOne({user_id: chatId});
    const findAdmin = await AdminModel.findOne({user_id: chatId});

    if (msg.chat.type !== "private") return;
    if (text == "/start") return startHandler(msg, chatId);
    
    // Admin
    if(findAdmin && !(findAdmin.language)) {
        if(text == "🇷🇺 Русский") return adminRuMenu(chatId);
        if(text == "🇺🇿 Uzbek") return adminUzMenu(chatId);
    };
    // Admin Ru
    if(findAdmin && findAdmin.language == "ru") {
        if(text == "🛒 Меню товаров") return productRuMenu(chatId);
        if(text == "⬅️ Главное меню") return backRuAdminMenu(chatId);
        if(text == "⚙️ Настройки") return settingsAdminRuMenu(chatId);
        if(text == "🌐 Изменить язык") return editingLanguageAdminRu(chatId);
        if(text == "🇺🇿 Uzbek") return chooseLanguageAdminRu(chatId);
        if(text == "⬅️ Вернутся в Настройках") return backSettingsRuMenu(chatId);
    };
    // Admin Uz
    if(findAdmin && findAdmin.language == "uz") {
        if(text == "🛒 Mahsulotlar menyusi") return productUzMenu(chatId);
        if(text == "⬅️ Asosiy menyu") return backUzAdminMenu(chatId);
        if(text == "⚙️ Sozlamalar") return settingsAdminUzMenu(chatId);
        if(text == "🌐 Tilni o‘zgartirish") return editingLanguageAdminUz(chatId);
        if(text == "🇷🇺 Русский") return chooseLanguageAdminUz(chatId);
        if(text == "⬅️ Sozlamalarga qaytish") return backSettingsUzMenu(chatId);
    };

    // Client
    if(findClient) {
        if (text == "🇷🇺 Русский" && findClient.step == client_reg_states.choosing_language) return registerRuValidateHandler(chatId);
        if (text == "🇺🇿 Uzbek" && findClient.step == client_reg_states.choosing_language) return registerUzValidateHandler(chatId);
        if (text == "📝 Регистрация") return nameRuValidateHandler(msg, chatId);
        if (text == "📝 Ro'yxatdan o'tish") return nameUzValidateHandler(msg, chatId);
    };

    // Client Ru
    if(findClient && findClient.language == "ru") {
        if(findClient.step == client_reg_states.entering_full_name) return phoneNumberRuValidateHandler(chatId, text);
        if(findClient.step == client_reg_states.entering_phone_number) return registerRuSuccessfully(chatId, contact || text);
        if(text == "🏪 О нас") return aboutRuUs(chatId);
        if(text == "⚙️ Настройки") return settingsRuClient(chatId);
        if(text == "⬅️ Назад") return backSettingsRuClient(chatId);
        if(text == "🌐 Изменить язык") editingRuLanguage(chatId);
        if(text == "🇺🇿 Uzbek") return chooseUzLanguage(chatId);
        if(text == "⬅️ Вернутся в Настройках") return backChoosingSettingsRu(chatId);
        if(text == "👤 Личные данные") return personalInfoRu(chatId);
        if(text == "📞 Обновить номер телефона") return editingPhoneNumberRu(chatId);
        if(findClient && findClient.step == client_reg_states.edit_phone) return phoneNumberEditingSuccessfullRu(chatId, contact || text);
        if(text == "📝 Обновить имя и фамилию") return fullNameEditingRu(chatId);
        if(findClient && findClient.step == client_reg_states.edit_full_name) return fullNameEditingSuccessfullRu(chatId, text);
    };
    // Client Uz 
    if(findClient && findClient.language == "uz") {
        if(findClient.step == client_reg_states.entering_full_name) return phoneNumberUzValidateHandler(chatId, text);
        if(findClient.step == client_reg_states.entering_phone_number) return registerUzSuccessfully(chatId, contact || text);
        if(text == "🏪 Biz haqimizda") return aboutUzUs(chatId);
        if(text == "⚙️ Sozlamalar") return settingsUzClient(chatId);
        if(text == "⬅️ Ortga qaytish") return backSettingsUzClient(chatId);
        if(text == "🌐 Tilni o‘zgartirish") return editingUzLanguage(chatId);
        if(text == "🇷🇺 Русский") return chooseRuLanguage(chatId);
        if(text == "⬅️ Sozlamalarga qaytish") return backChoosingSettingsUz(chatId);
        if(text == "👤 Shaxsiy ma’lumotlar") return personalInfoUz(chatId);
        if(text == "📞 Telefon raqamini yangilash") return editingPhoneNumberUz(chatId);
        if(findClient && findClient.step == client_reg_states.edit_phone) return phoneNumberEditingSuccessfullUz(chatId, contact || text);
        if(text == "📝 Ism va familiyani yangilash") return fullNameEditingUz(chatId);
        if(findClient && findClient.step == client_reg_states.edit_full_name) return fullNameEditingSuccessfullUz(chatId, text);
    };
});